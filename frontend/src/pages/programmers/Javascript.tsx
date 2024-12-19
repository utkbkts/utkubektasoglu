import Markdown from "@/components/markdown/Markdown";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Javascript = () => {
  const codeSnippets = {
    variables: `let name = 'John';
const age = 25;
var isStudent = true;`,
    functions: `function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet("Alice"));`,
    loops: `for (let i = 0; i < 5; i++) {
  console.log(i);
}`,
    conditionals: `const num = 10;
if (num > 5) {
  console.log("Greater than 5");
} else {
  console.log("Less than or equal to 5");
}`,
    arrays: `const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => console.log(fruit));`,
  };

  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const renderCodeBlock = (codeString: any) => (
    <div style={{ position: "relative" }}>
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {codeString}
      </SyntaxHighlighter>
      <button
        onClick={() => handleCopy(codeString)}
        style={{
          position: "absolute",
          top: "2px",
          right: "10px",
          padding: "5px 10px",
          backgroundColor: "#2d2d2d",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {copySuccess ? "Copied!" : "Copy"}
      </button>
    </div>
  );

  return (
    <div>
      <Markdown>
        {`# 🚀 **Mastering JavaScript: The Language of the Web**

## Understanding JavaScript

JavaScript is one of the most popular and versatile programming languages in the world today. Whether you're building dynamic web applications, creating server-side solutions, or developing mobile apps, JavaScript has got you covered.

### Variables and Data Types
JavaScript supports multiple data types like strings, numbers, objects, arrays, and more. Variables can be declared using \`var\`, \`let\`, or \`const\`.
        `}
      </Markdown>
      {renderCodeBlock(codeSnippets.variables)}
      <Markdown>
        {`# **Functions**

Functions in JavaScript allow you to encapsulate logic and reuse it throughout your application.`}
      </Markdown>
      {renderCodeBlock(codeSnippets.functions)}
      <Markdown>
        {`# **Loops**

Loops allow you to perform repetitive tasks efficiently. Here is an example of a \`for\` loop:`}
      </Markdown>
      {renderCodeBlock(codeSnippets.loops)}
      <Markdown>
        {`# **Conditionals**

Conditionals are used to perform different actions based on different conditions. Here's an example:`}
      </Markdown>
      {renderCodeBlock(codeSnippets.conditionals)}
      <Markdown>
        {`# **Arrays**

Arrays in JavaScript are used to store multiple values in a single variable. Here's an example of iterating over an array:`}
      </Markdown>
      {renderCodeBlock(codeSnippets.arrays)}
    </div>
  );
};

export default Javascript;
