import Markdown from "@/components/markdown/Markdown";

const ReactFundamentals = () => {
  return (
    <div>
      <Markdown>
        {`# 🔥 **React Fundamentals: A Guide to Building Modern Web Applications**

React is a powerful JavaScript library developed by Facebook for building user interfaces. It focuses on creating dynamic and interactive web applications efficiently using a component-based architecture.

---

## **Core Concepts of React**

### 1. **Components**
- **Definition**: Components are the building blocks of React applications. They represent reusable pieces of UI.
- **Types**: 
  - **Functional Components**: JavaScript functions that return JSX.
  - **Class Components**: ES6 classes extending \`React.Component\` (used less frequently in modern React).

\`\`\`jsx
// Example Functional Component
const Greeting = () => {
  return <h1>Hello, World!</h1>;
};
export default Greeting;

\`\`\`

---

### 2. **JSX (JavaScript XML)**
- JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript files.
- It improves readability and integrates well with React.

\`\`\`jsx
const element = <h1>Welcome to React!</h1>;
\`\`\`

---

### 3. **State Management**
- **State** is a built-in React object that tracks changes and allows components to react dynamically.
- The \`useState\` hook is commonly used in functional components.

\`\`\`jsx
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
\`\`\`

---

### 4. **Props (Properties)**
- **Props** are used to pass data between components.
- Props are immutable, ensuring the parent component remains in control of the data.

\`\`\`jsx
const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
  };

// Usage
<Greeting name="Utku" />;
\`\`\`

---

### 5. **Lifecycle Methods and Effects**
- **Lifecycle Methods**: Available in class components (e.g., \`componentDidMount\`, \`componentWillUnmount\`).
- **useEffect Hook**: In functional components, \`useEffect\` manages side effects like fetching data or updating the DOM.

\`\`\`jsx
import React, { useEffect } from "react";

const FetchData = () => {
  useEffect(() => {
    console.log("Component Mounted");
  }, []); // Empty dependency array ensures it runs once.

  return <p>Data fetched!</p>;
};
\`\`\`

---

### 6. **Virtual DOM**
- React uses a Virtual DOM to improve performance.
- Changes are calculated and only updated in the actual DOM where necessary, making it faster than direct DOM manipulation.

---

### 7. **React Router**
- Used for handling navigation in React applications.
- Create single-page applications (SPAs) with multiple routes.

\`\`\`jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);
\`\`\`

---

## **Why Learn React?**

- **Reusable Components**: Build modular and maintainable code.
- **Strong Ecosystem**: Vast community support and libraries.
- **High Performance**: Efficient updates with the Virtual DOM.
- **Versatile**: Use React for web (React.js), mobile (React Native), and even desktop (Electron).

---

## **Example Application: A Simple To-Do List**

\`\`\`jsx
import React, { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
\`\`\`

---

## **Conclusion**

React makes it easier than ever to build dynamic and scalable web applications. By mastering its core fundamentals—components, state, props, and hooks—you can create robust applications that users will love.

---

### Are you ready to dive into React? Share your thoughts and favorite features with us! 🚀
`}
      </Markdown>
    </div>
  );
};

export default ReactFundamentals;
