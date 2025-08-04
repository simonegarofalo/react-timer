# React Timer

A simple **React Timer** app built with the specific goal of exploring key React concepts:

- `useEffect` and side effects
- `useState` for reactive state management
- `useRef` for persistent mutable values
- Writing clean, maintainable code with proper memory handling

---

## Purpose of the Project

This project was developed as a **learning exercise** to:

- Understand the behavior of `useEffect` and its dependency array
- Safely manage timers using `setInterval` and `clearInterval`
- Use `useRef` to store mutable values without causing re-renders
- Practice writing **clean, readable and predictable React code**

---

## Features

- Start and Pause the timer
- Reset the counter to 0
- Accurate 1-second updates
- Proper cleanup of intervals to prevent memory leaks
- Simple, clean logic separated from UI

---

## Tech Stack

- React (with Hooks)
- JSX
- CSS

---

## Installation

```
git clone https://github.com/simonegarofalo/react-timer.git
cd react-timer
npm install
npm start
```

---

## Project Structure

```txt
src/
├── App.jsx
├── App.css
├── main.jsx
```

---

### How it works

- useState holds the current count and running state

- useRef stores the interval ID to avoid triggering re-renders

- useEffect watches the isRunning flag:

1. Starts the timer if isRunning is true and no interval is active

2. Clears the timer when isRunning is false

3. Ensures cleanup when the component unmounts

---

### What I Learned

Correct usage of useEffect with cleanup functions

When to use useRef vs useState

How to manage intervals in React safely

Clean separation of logic and presentation

Importance of writing maintainable, memory-safe code

---

Developed by <a href="https://github.com/simonegarofalo">simonegarofalo</a>

Feel free to fork, use, or contribute to the project.
