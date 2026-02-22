document.addEventListener("DOMContentLoaded", loadLists);

document.getElementById("addKeyword").addEventListener("click", addKeyword);
document.getElementById("addDomain").addEventListener("click", addDomain);

function addKeyword() {
  const input = document.getElementById("keywordInput");
  const value = input.value.trim().toLowerCase();
  if (!value) return;

  chrome.storage.local.get(["blockedKeywords"], (data) => {
    const keywords = data.blockedKeywords || [];

    if (!keywords.includes(value)) {
      keywords.push(value);
      chrome.storage.local.set({ blockedKeywords: keywords }, reloadExtension);
    }

    input.value = "";
  });
}

function addDomain() {
  const input = document.getElementById("domainInput");
  const value = input.value.trim().toLowerCase();
  if (!value) return;

  chrome.storage.local.get(["blockedDomains"], (data) => {
    const domains = data.blockedDomains || [];

    if (!domains.includes(value)) {
      domains.push(value);
      chrome.storage.local.set({ blockedDomains: domains }, reloadExtension);
    }

    input.value = "";
  });
}

function loadLists() {
  chrome.storage.local.get(["blockedKeywords", "blockedDomains"], (data) => {
    const keywordList = document.getElementById("keywordList");
    const domainList = document.getElementById("domainList");

    keywordList.innerHTML = "";
    domainList.innerHTML = "";

    (data.blockedKeywords || []).forEach((keyword, index) => {
      const li = createListItem(keyword, "keyword", index);
      keywordList.appendChild(li);
    });

    (data.blockedDomains || []).forEach((domain, index) => {
      const li = createListItem(domain, "domain", index);
      domainList.appendChild(li);
    });
  });
}

function createListItem(value, type, index) {
  const li = document.createElement("li");
  li.textContent = value;
  li.style.display = CSSLayerBlockRule;

  const btn = document.createElement("button");
  btn.textContent = "I'm Coward, I resign";
  btn.style.marginLeft = "10px";
  btn.style.visibility= "hidden";

  btn.onclick = () => removeItem(type, index);

  li.appendChild(btn);
  return li;
}

function removeItem(type, index) {
  chrome.storage.local.get(
    type === "keyword" ? ["blockedKeywords"] : ["blockedDomains"],
    (data) => {
      const key = type === "keyword" ? "blockedKeywords" : "blockedDomains";
      const arr = data[key] || [];

      arr.splice(index, 1);

      chrome.storage.local.set({ [key]: arr }, reloadExtension);
    },
  );
}

function reloadExtension() {
  chrome.runtime.reload();
}
