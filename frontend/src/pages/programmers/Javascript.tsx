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

  const [copyStatus, setCopyStatus] = useState<Record<string, boolean>>({});

  const handleCopy = (text: string, snippetName: string): void => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyStatus((prevStatus) => ({
        ...prevStatus,
        [snippetName]: true,
      }));
      setTimeout(() => {
        setCopyStatus((prevStatus) => ({
          ...prevStatus,
          [snippetName]: false,
        }));
      }, 2000);
    });
  };

  const renderCodeBlock = (
    codeString: string,
    snippetName: string
  ): JSX.Element => (
    <div style={{ position: "relative" }}>
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {codeString}
      </SyntaxHighlighter>
      <button
        onClick={() => handleCopy(codeString, snippetName)}
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
        {copyStatus[snippetName] ? "Copied!" : "Copy"}
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
      {renderCodeBlock(codeSnippets.variables, "variables")}
      <Markdown>
        {`# **Functions**

Functions in JavaScript allow you to encapsulate logic and reuse it throughout your application.`}
      </Markdown>
      {renderCodeBlock(codeSnippets.functions, "functions")}
      <Markdown>
        {`# **Loops**

Loops allow you to perform repetitive tasks efficiently. Here is an example of a \`for\` loop:`}
      </Markdown>
      {renderCodeBlock(codeSnippets.loops, "loops")}

      <Markdown>
        {`# **Conditionals**

Conditionals are used to perform different actions based on different conditions. Here's an example:`}
      </Markdown>
      {renderCodeBlock(codeSnippets.conditionals, "conditionals")}
      <Markdown>
        {`# **Arrays**

Arrays in JavaScript are used to store multiple values in a single variable. Here's an example of iterating over an array:`}
      </Markdown>
      {renderCodeBlock(codeSnippets.arrays, "arrays")}
    </div>
  );
};

export default Javascript;
