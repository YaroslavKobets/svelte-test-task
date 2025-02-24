# 🌟 Svelte Project

A streamlined setup for building Svelte applications, powered by [`sv`](https://github.com/sveltejs/cli).

---

## 🚀 Project Setup

Create a new Svelte project:

```bash
# In the current directory
npx sv create

# In a specific folder (e.g., my-app)
npx sv create my-app
```

---

## 💻 Development

Install dependencies and start the development server:

```bash
npm install
npm run dev

# To open the app in a new browser tab
npm run dev -- --open
```

---

## 📦 Building for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

> ⚙️ **Note:** To deploy your app, install an appropriate [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

---

# 📄 Technical Task: Frontend Implementation Based on Figma Design

## 🌟 Project Overview

Develop a frontend application based on the provided Figma design using **SvelteKit**, **SCSS**, and **BEM** methodology. The implementation must strictly follow **PixelPerfect** principles.

---

## 📋 Requirements

### 🔹 1. Functionality
- Implement **two screens** based on the Figma design:
  - One screen displays a button with a **closed modal window**.
  - Another screen shows the same button but with an **open modal window**.
- The modal window should open when clicking the button and close on:
  - Clicking the **close button**.
  - Clicking **outside the modal** (misclick detection).

### 🔹 2. Modal Window Features
- **Embedded iFrame:** The modal should contain an iFrame.
- **Tab Navigation:** Users should be able to switch between different tabs inside the modal.
- **Scrollable Content:** The modal should contain a list of tasks that can be scrolled.
- **Countdown Timer:**  
  - A countdown timer should display the time left until the next day.  
  - The timer should reset and start counting down again after reaching zero.

### 🔹 3. Deployment
- **Deploy** the application on Vercel.
- Provide a **working link** to the deployed application.

---

## 🛠️ Technology Stack

- 🟢 **SvelteKit** for frontend development  
- 🎨 **SCSS** for styling  
- 🧩 **BEM** methodology for structured CSS class naming  
- ☁️ **Vercel** for hosting  

---

## 📁 Project Structure

The developer is free to design the application’s folder structure but should follow **best practices** for maintainability and scalability.

---

## 🎁 Deliverables

- ✅ Fully functional web application meeting the above requirements.  
- 🌐 Deployed application link on **Vercel**.  
- 📦 Source code hosted in a **public repository** (e.g., GitHub or GitLab).  
