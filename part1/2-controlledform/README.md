# Contact Form App

A simple React application for managing contacts, built with a component-based architecture and React best practices.

## Features

* Add new contacts through a **Controlled Form**
* Display contacts in a separate list component
* Header and Footer implemented using **Component Composition**
* Clean and maintainable component structure
* State shared between sibling components using **Lifting State Up**
* Single Responsibility Principle (SRP) applied to component design
* Reusable UI components
* Responsive and simple user interface

## Project Structure

* **Layout**

  * `Header`
  * `Footer`
  * `Layout`

* **Pages**

  * `Home`

* **Components**

  * `ContactForm`
  * `ContactList`
  * Reusable UI components

## Architecture

The project follows React's recommended component architecture:

* **Component Composition** is used to build the application's layout by composing the `Header`, `Footer`, and page content.
* The **Home** component acts as the parent container and follows the **Single Responsibility Principle**, delegating each responsibility to dedicated child components.
* A **Controlled Form** is implemented to manage all form inputs through React state.
* **Lifting State Up** is used so the parent component owns the contacts state and passes data and callbacks to both the form and the contact list.
* Components are designed to be reusable, independent, and easy to maintain.

## Technologies

* React
* TypeScript
* Tailwind CSS

## Learning Objectives

This project focuses on practicing fundamental React concepts, including:

* Controlled Components
* Forms in React
* Component Composition
* Lifting State Up
* Single Responsibility Principle (SRP)
* State Management with `useState`
* Props and Component Communication
* Reusable Components
