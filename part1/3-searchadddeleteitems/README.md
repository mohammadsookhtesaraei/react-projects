# React User List

A simple React project for managing a list of users.

Users can enter a username, add it to the list, and then edit or delete existing items.

The main goal of this project is to practice and demonstrate the fundamental concepts of React rather than building a complex application.

## Features

* Add a new user to the list
* Display users using list rendering
* Edit an existing user
* Delete a user
* Conditional rendering for different UI states
* Persist data using `localStorage`
* Component-based architecture
* State management with `useState`
* Lifting state up between components
* Passing data and functions through props
* Using callback functions for child-to-parent communication
* Styling with Tailwind CSS

## React Concepts

This project focuses on the following core React concepts:

### Components

The application is divided into smaller, reusable components, with each component having a specific responsibility.

### Props

Props are used to pass data and callback functions from parent components to child components.

### State

`useState` is used to manage the application's dynamic data, such as the current username and the list of users.

### Lifting State Up

The shared state is kept in the appropriate parent component so that multiple child components can access and modify the same data.

### List Rendering

The user list is rendered dynamically using JavaScript's `map()` method.

Each item in the list is rendered based on the current state.

### Conditional Rendering

Conditional rendering is used to display different UI elements depending on the current state of the application.

For example, when the list is empty, an appropriate message can be displayed instead of rendering an empty list.

```jsx
{users.length === 0 ? (
  <p>No users found.</p>
) : (
  users.map((user) => (
    <ListItem key={user.id} user={user} />
  ))
)}
```

This demonstrates how React can dynamically determine which elements should be rendered based on state.

### Callback Functions

Callback functions are passed to child components through props, allowing child components to trigger actions and state changes in the parent component.

For example:

```jsx
<ListItems
  items={items}
  onDelete={handleDelete}
  onEdit={handleEdit}
/>
```

The child component can call these functions when the user interacts with the UI.

### Local Storage

The user list is stored in the browser's `localStorage` so that the data remains available after refreshing the page.

This allows the application to persist its state between browser sessions.

### Tailwind CSS

Tailwind CSS is used for styling the application and creating the UI using utility classes.

## Project Structure

```text
src/
├── components/
│   ├── additem/
│   │   └── AddItem.jsx
│   │
│   └── listItems/
│       └── ListItems.jsx
│
├── pages/
│   └── HomePage.jsx
│
├── App.jsx
└── main.jsx
```

The exact structure may vary depending on the project configuration.

## Component Architecture

The main page acts as the owner of the shared state.

```text
HomePage
│
├── AddItem
│   └── Receives data and callback functions through props
│
└── ListItems
    └── Receives list data and callbacks through props
```

The data flow follows React's one-way data flow:

```text
State
  ↓
Parent Component
  ↓
Props
  ↓
Child Components
  ↓
Callback Function
  ↓
Parent State Update
  ↓
Re-render
```

## Technologies

* React
* JavaScript
* Tailwind CSS
* Local Storage
* Vite

## What I Practiced

This project was built primarily to strengthen my understanding of React fundamentals, including:

* Creating and composing components
* Managing state with `useState`
* Understanding props and one-way data flow
* Lifting state up
* Rendering dynamic lists
* Conditional rendering
* Passing callback functions between components
* Updating and deleting items from state
* Persisting state with `localStorage`
* Separating UI responsibilities between components
* Styling React applications with Tailwind CSS

## Getting Started



Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local development URL provided by Vite.

## Purpose

This project is a small hands-on exercise designed to demonstrate how the fundamental pieces of React work together in a real application.

Instead of focusing on advanced libraries or complex state management, the project keeps the architecture simple and uses React's core features to manage state, data flow, user interactions, conditional UI, and list rendering.
