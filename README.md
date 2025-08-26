# Zustand Practice Projects

## What is Zustand?

Zustand is a small, fast, and scalable state management solution for React. It's simple to understand and requires minimal boilerplate code compared to other state management libraries.

## Quick Start Guide

1. Install Zustand:

```bash
npm install zustand
```

2. Create a store:

```javascript
import create from "zustand";

// Create a store
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
```

3. Use the store in your React component:

```javascript
function Counter() {
  const { count, increment, decrement } = useStore();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

## Key Features

- 🚀 Lightweight and fast
- 📦 No boilerplate code
- 🎯 Direct state updates
- 🔄 Easy integration with React
- ⚡ Supports middleware and devtools

This repository contains various practice projects demonstrating different use cases of Zustand for state management in React applications.
