# 📚 Book Library

A React-based book library application where users can search for books, like them, and manage their favorite books.

The project uses **JSON Server** as a mock backend and **Axios** for API communication.

## Features

- Search books by title
- Like and unlike books
- Add books to favorites
- Remove books from favorites
- Display books using list rendering
- Conditional rendering for the favorite books list
- Persist like status using JSON Server
- Fetch and update data using Axios
- Lifted state between parent and child components
- Callback functions for child-to-parent communication
- React `useState` and `useEffect`

## Concepts Practiced

### Component-Based Architecture

The application is divided into reusable components such as:

- `HomePage`
- `SearchBox`
- `List`
- `BookItem`
- `FavoriteBooks`

### Props

Props are used to pass data and callback functions between components.

Example:

    <BookItem
      data={data}
      onLike={handleLikeBookButtonClick}
    />

### State Management

React `useState` is used to manage:

- Search input
- Book data
- Displayed books
- Favorite books

### Lifting State Up

The favorite books state is maintained in the parent component and passed down to child components.

This allows the parent component to control the shared state between the book list and favorite books.

### Callback Functions

Callback functions are passed from parent components to child components so that child components can notify the parent about user actions.

Example:

    <BookItem
      data={data}
      onLike={handleLikeBookButtonClick}
    />

### List Rendering

Books and favorite books are dynamically rendered using the `map()` method.

Example:

    display.map((item) => (
      <BookItem
        key={item.id}
        data={item}
      />
    ))

### Conditional Rendering

Conditional rendering is used to display different UI states.

For example, when there are no favorite books:

    liked.length === 0
      ? <p>Empty list</p>
      : <FavoriteBooks liked={liked} />

### useEffect

`useEffect` is used for side effects such as fetching book data from the API.

Example:

    useEffect(() => {
      getData();
    }, []);

## API and Backend

The project uses **JSON Server** as a mock REST API.

### Endpoints

    GET    /books
    GET    /books/:id
    PATCH  /books/:id

The `like` property of each book is updated through the API.

Example:

    PATCH /books/2

    {
      "like": true
    }

## Axios

Axios is used to communicate with the JSON Server API.

API-related logic is separated into service functions instead of being directly implemented inside UI components.

Example:

    const getAllBooks = async () => {
      const response = await axios.get("/books");
      return response.data;
    };

## Project Structure

    src/
    ├── components/
    │   ├── BookItem/
    │   ├── FavoriteBooks/
    │   ├── List/
    │   └── SearchBox/
    │
    ├── pages/
    │   └── HomePage/
    │
    ├── services/
    │   └── bookServices.ts
    │
    ├── types/
    │   └── books-interface.ts
    │
    └── ...

## User Flow

    User
      ↓
    Search for a book
      ↓
    Book List
      ↓
    Like / Unlike
      ↓
    Callback Function
      ↓
    Parent State Update
      ↓
    Axios Request
      ↓
    JSON Server
      ↓
    Updated Book Data

## Technologies

- React
- TypeScript
- Axios
- JSON Server
- CSS Modules
- React Icons

## Learning Goals

This project was built to practice fundamental React concepts, including:

- Components
- Props
- State
- Lifting State Up
- Callback Functions
- Controlled Components
- List Rendering
- Conditional Rendering
- `useState`
- `useEffect`
- Axios
- JSON Server
- TypeScript
- API Communication
- Component Composition