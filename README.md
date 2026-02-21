

---


# 🛑 Smart Website Blocker (Chrome / Brave Extension)

A lightweight, Manifest V3-based browser extension that blocks websites based on:

- ✅ Keywords in URL  
- ✅ Exact website domains  
- ✅ Subdomains automatically  
- ✅ Persistent storage of rules  
- ✅ Custom blocked page  

Built using the Chrome Extensions Manifest V3 architecture.

---

# 📦 Project Structure



website-blocker/
│
├── manifest.json
├── background.js
├── popup.html
├── popup.js
├── blocked.html
└── styles.css



---

# 🧰 Requirements

- Google Chrome (latest version)  
OR  
- Brave Browser (latest version)  

This extension works in both because Brave is Chromium-based.

---

# 🚀 How To Install This Project On Your Laptop

## Step 1 — Download the Project

Option A: If from GitHub  
- Click **Code → Download ZIP**
- Extract the ZIP file

Option B: If you created it manually  
- Ensure all files are inside one folder  
- That folder must contain `manifest.json`

Example:


C:\Users\YourName\Desktop\website-blocker\



---

## Step 2 — Open Extensions Page

### For Chrome:


chrome://extensions/



### For Brave:


brave://extensions/



---

## Step 3 — Enable Developer Mode

- Toggle **Developer Mode** (top-right corner)

---

## Step 4 — Load The Extension

- Click **Load unpacked**
- Select the `website-blocker` folder
- Click **Select Folder**

If successful:
- Extension appears in list
- No red errors
- Extension icon appears in toolbar

---

# ▶️ How To Run / Use The Extension

## 1️⃣ Open The Extension

- Click the extension icon in browser toolbar
- Popup window opens

---

## 2️⃣ Add Keyword Blocking

Example:



game



This will block:
- epicgames.com
- freegames.net
- my-game-site.org

Because it matches substring in URL.



## 3️⃣ Add Domain Blocking

Example:



facebook.com



This blocks:
- facebook.com
- www.facebook.com
- m.facebook.com

It blocks exact domain + subdomains.



## 4️⃣ Remove Blocked Items

Click ❌ next to any keyword or domain.

Rules update automatically.

---

# 🧠 How It Works Internally

This extension uses:

### 1️⃣ Manifest V3
Modern Chrome extension architecture.

### 2️⃣ Declarative Net Request API

Instead of manually intercepting traffic, it:

- Generates blocking rules
- Sends rules to browser engine
- Browser enforces blocking

This means:
- Fast
- Efficient
- Low memory usage

---

## 🔁 Rule Generation Process



User Input
↓
Saved in chrome.storage
↓
background.js rebuilds rules
↓
Chrome's rule engine blocks matching URLs
↓
Redirects to blocked.html



---

# 🔐 Why This Extension Is Safe

### ✅ No Data Collection
- No tracking
- No analytics
- No external API calls
- No remote servers

### ✅ All Processing Is Local
- Uses `chrome.storage.local`
- Rules run inside browser engine

### ✅ No Permissions Abuse

It only uses:
- `storage`
- `declarativeNetRequest`
- `<all_urls>` (required for blocking)

It does NOT:
- Access history
- Read cookies
- Track browsing data
- Send data anywhere

---

# 🛡 Security Model

Manifest V3 enforces:

- Service Worker architecture
- Strict permission boundaries
- Sandboxed execution
- Event-driven lifecycle

Your data never leaves your machine.

---

# ⚙ How To Modify Or Customize

You can modify:

### Change Block Page
Edit:


blocked.html



---

### Improve Styling
Edit:


styles.css



---

### Change Blocking Logic
Edit:


background.js



---

# 🧪 Testing

Try:

1. Add keyword:


game


2. Visit:


[https://epicgames.com](https://epicgames.com)


3. It should redirect to blocked page.

---

# 🧹 How To Uninstall

1. Go to:


chrome://extensions/


2. Click **Remove**

All stored data is deleted automatically.

---

# 📌 Known Limitations

- Does not classify websites by category (unless extended)
- Does not support regex (can be added)
- Does not track time spent

---

# 🚀 Future Improvements (Optional)

- Password-protected settings
- Time-based blocking (Pomodoro)
- Category-based filtering
- AI-powered classification
- Usage analytics dashboard

---

# 📄 License

Free to use and modify.

---

# 👨‍💻 Built With

- JavaScript
- Chrome Extensions API
- Manifest V3
- DeclarativeNetRequest Engine

---


# 📸 Screenshots

> Below are screenshots of the extension in action.  
> (Replace the image paths with your actual screenshot file names.)

---

## 🔹 Extension Popup UI

![Popup UI]
<img width="455" height="532" alt="image" src="https://github.com/user-attachments/assets/0e801971-aeba-4960-846a-e3560d5c472b" />

Shows:
- Add keyword input
- Add domain input
- List of blocked keywords
- List of blocked domains

---

## 🔹 Blocking In Action

![Blocked Page]
<img width="1636" height="617" alt="image" src="https://github.com/user-attachments/assets/93964469-1f59-4711-9c80-857f8cc55b83" />


Demonstrates:
- Automatic redirection
- Custom blocked message
- Instant enforcement via rule engine

---

## 🔹 Extension Loaded in Browser

<img width="674" height="682" alt="image" src="https://github.com/user-attachments/assets/aba377c2-5eb7-48b4-ae92-bebde27a84de" />




Displays:
- Extension active
- Service worker running
- No errors

---

> 💡 Tip:  
> Create a folder named `screenshots` inside your project directory and place your images there:
>
> 
> website-blocker/
> ├── screenshots/
> │   ├── popup.png
> │   ├── blocked-page.png
> │   └── extensions-page.png
> 

---

# 🚀 Upcoming Features (Under Development)

This project is actively evolving. Several powerful features are planned:

### 🔐 Security & Control
- Password-protected settings
- Admin mode
- Lock/unlock schedule

### ⏱ Productivity Tools
- Pomodoro-based blocking
- Scheduled blocking (time-based)
- Focus mode

### 🧠 Intelligent Filtering
- Website category-based blocking
- AI-powered classification
- Regex-based filtering

### 📊 Analytics & Insights
- Time saved dashboard
- Block statistics
- Usage reports

### 🎨 UI Enhancements
- Modern UI redesign
- Dark mode
- Custom themes

---

This extension is being built to become a **full-featured productivity and focus control system**, not just a simple blocker.

More features are coming soon.

# 🎯 Summary

This extension:

- Runs locally
- Is lightweight
- Is safe
- Requires no backend
- Works on Chrome & Brave
- Blocks websites instantly using browser-native rule engine

---


---


