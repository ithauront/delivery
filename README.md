# ☕ Coffee Delivery – Frontend Learning Project

This is a mock delivery app for a coffee shop, developed as part of my frontend learning journey. It is a fully client-side application built with React, TypeScript, and Vite, featuring routing, forms, local storage, and context-based state management, all without any backend integration.

The project simulates a shopping experience where users can browse coffees, add them to a cart, fill in their delivery address, select a payment method, and place an order.

## 🌐 Live Preview

[![View on GitHub Pages](https://img.shields.io/badge/Live%20Preview-Click%20Here-blue?style=for-the-badge)](https://ithauront.github.io/delivery/)

Or access directly: [https://ithauront.github.io/delivery/](https://ithauront.github.io/delivery/)

## 🚀 Technologies Used

*  React

*  TypeScript

*  Vite

*  React Router DOM

*  Styled Components

*  React Hook Form

*  Phosphor Icons

*  CSS

*  Local Storage API

*  Geolocation API (via OpenStreetMap reverse lookup)

## 📦 Instalation

  ```bash
# Clone the repository
git clone https://github.com/ithauront/delivery

# Enter the project directory
cd delivery

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🧩 Features

  * Browse and filter coffee options

  * Add/remove items from shopping cart

  * Toggle item quantity in cart

  * View cart summary with price calculation

  * Responsive UI with two versions of the coffee card component:

       ** One for the main catalog

       ** One for checkout

  * Form for delivery information (validated)

  * Payment method selection (simulated)

  * Auto-fill city location using geolocation

  * Persist user form data using localStorage

  * Use of React Context to manage global cart state

## ⚠️ Limitations

  *  No backend integration — all data is managed client-side

  * Mocked product list — not loaded from an API

## 📚 What I Learned

While building this project, I practiced:

  * Componentization and conditional layout rendering

  *  React Context for global state sharing

  * Geolocation usage with reverse geocoding via API

  * Form handling and validation using controlled components

  * Form data persistence with localStorage

  * Dynamic component behavior based on route context

  * Responsive design using styled-components
