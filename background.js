// ==============================
// Smart Website Blocker - Background
// Manifest V3 Compatible
// ==============================

const RULE_ID_START = 1000;
const MAX_RULE_RANGE = 5000;

// When extension installs or updates
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension Installed/Updated");
  rebuildRules();
});

// When extension starts
chrome.runtime.onStartup.addListener(() => {
  rebuildRules();
});

// When storage changes (auto update rules)
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && (changes.blockedKeywords || changes.blockedDomains)) {
    rebuildRules();
  }
});

// Core Function
function rebuildRules() {
  chrome.storage.local.get(["blockedKeywords", "blockedDomains"], (data) => {
    const keywords = (data.blockedKeywords || []).map((k) => k.toLowerCase());
    const domains = (data.blockedDomains || []).map((d) => d.toLowerCase());

    let newRules = [];
    let ruleId = RULE_ID_START;

    // 🔹 Keyword Rules (substring match)
    keywords.forEach((keyword) => {
      if (!keyword.trim()) return;

      newRules.push({
        id: ruleId++,
        priority: 1,
        action: {
          type: "redirect",
          redirect: { extensionPath: "/blocked.html" },
        },
        condition: {
          urlFilter: keyword,
          resourceTypes: ["main_frame"],
        },
      });
    });

    // 🔹 Domain Rules (exact domain + subdomains)
    domains.forEach((domain) => {
      if (!domain.trim()) return;

      newRules.push({
        id: ruleId++,
        priority: 1,
        action: {
          type: "redirect",
          redirect: { extensionPath: "/blocked.html" },
        },
        condition: {
          urlFilter: `||${domain}^`,
          resourceTypes: ["main_frame"],
        },
      });
    });

    // Remove old rules in safe ID range
    const removeIds = [];
    for (let i = RULE_ID_START; i < RULE_ID_START + MAX_RULE_RANGE; i++) {
      removeIds.push(i);
    }

    chrome.declarativeNetRequest.updateDynamicRules(
      {
        removeRuleIds: removeIds,
        addRules: newRules,
      },
      () => {
        if (chrome.runtime.lastError) {
          console.error("Rule update error:", chrome.runtime.lastError);
        } else {
          console.log("Rules rebuilt successfully:", newRules.length);
        }
      },
    );
  });
}
