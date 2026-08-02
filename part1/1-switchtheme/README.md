# 🎨 React Theme Switcher

A modern and reusable **Light/Dark Theme Switcher** built with **React 19**, **TypeScript**, and the **Context API**.

This project demonstrates a clean and scalable approach to global theme management using React Context. The selected theme is persisted in **Local Storage** and applied globally through **CSS Variables**.

---

## ✨ Features

* 🌞 Light & Dark theme support
* ⚛️ Built with React 19
* 🪝 Custom `useTheme` hook
* 💾 Theme persistence with Local Storage
* 🎨 CSS Variables for scalable theming
* 🔒 Fully type-safe with TypeScript
* 📦 Clean and reusable architecture
* 🚀 Easy to integrate into any React application

---

## 📂 Project Structure

```text
src
│
├── components
│   └── ThemeToggle.tsx
│
├── context
│   ├── ThemeContext.tsx
│   └── ThemeProvider.tsx
│
├── hooks
│   ├── useLocalStorage.ts
│   └── useTheme.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🛠 Tech Stack

* React 19
* TypeScript
* Context API
* CSS Variables
* Local Storage
* Vite

---

## ⚙️ Application Flow

```text
User clicks the toggle button
          │
          ▼
handleToggleTheme()
          │
          ▼
setTheme()
          │
          ▼
React updates the state
          │
          ▼
ThemeProvider re-renders
          │
          ▼
Context value changes
          │
          ▼
Consumers re-render
          │
          ▼
useEffect runs
          │
          ▼
Updates the <html> class
          │
          ▼
CSS Variables update
          │
          ▼
The UI switches theme
```

---

## 💾 Theme Persistence

The selected theme is stored in **Local Storage**.

When the application loads:

* Reads the saved theme from Local Storage.
* Falls back to `light` if no value exists.
* Applies the selected theme to the `<html>` element.
* Saves the updated theme whenever the user switches between Light and Dark mode.

---

## 🎨 CSS Variables

The application uses CSS Custom Properties to manage colors across the entire application.

```css
:root {
  --background: white;
  --text: black;
}

html.dark {
  --background: #16171d;
  --text: #f3f4f6;
}
```

By changing only the class on the `<html>` element, every component automatically receives the correct theme without additional logic.

---

## 📖 What You'll Learn

This project demonstrates:

* React 19 Context API
* Global state management
* Custom React Hooks
* TypeScript Generics
* Local Storage integration
* CSS Variables
* React rendering lifecycle
* Side effects with `useEffect`
* Building reusable and maintainable React architecture

---

## 🤝 Contributing

Contributions, issues, and suggestions are always welcome.

Feel free to fork the repository and submit a pull request.

---

## 📄 License

This project is licensed under the **MIT License**.
