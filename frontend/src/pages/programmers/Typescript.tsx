import Markdown from "@/components/markdown/Markdown";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

type CodeSnippets = {
  variables: string;
  functions: string;
  loops: string;
  conditionals: string;
  lists: string;
};

const Typescript = () => {
  const codeSnippets: CodeSnippets = {
    variables: `let name: string = "John";
let age: number = 25;
let isStudent: boolean = true;`,
    functions: `function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet("Alice"));`,
    loops: `for (let i = 0; i < 5; i++) {
  console.log(i);
}`,
    conditionals: `let num: number = 10;
if (num > 5) {
  console.log("Greater than 5");
} else {
  console.log("Less than or equal to 5");
}`,
    lists: `let fruits: string[] = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => {
  console.log(fruit);
});`,
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
      <SyntaxHighlighter language="typescript" style={atomOneDark}>
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
        {`# 🚀 **Mastering TypeScript: A Versatile Programming Language**

## Understanding TypeScript

TypeScript is a superset of JavaScript that introduces optional static typing. It is designed to make JavaScript development more robust and manageable, especially in large applications.

### Variables and Data Types
In TypeScript, variables are explicitly typed, meaning you declare their type at the time of assignment. TypeScript supports various data types such as strings, numbers, booleans, arrays, etc.
        `}
      </Markdown>
      {renderCodeBlock(codeSnippets.variables, "variables")}
      <Markdown>
        {`# **Functions**

Functions in TypeScript are blocks of reusable code. They are strongly typed, meaning you can specify parameter and return types. Here's an example of a function that takes a string and returns a greeting message:`}
      </Markdown>
      {renderCodeBlock(codeSnippets.functions, "functions")}
      <Markdown>
        {`# **Loops**

TypeScript supports several loop constructs, including the traditional \`for\` loop. Here's an example of a loop that prints numbers from 0 to 4:`}
      </Markdown>
      {renderCodeBlock(codeSnippets.loops, "loops")}
      <Markdown>
        {`# **Conditionals**

Conditionals in TypeScript work similarly to JavaScript. Here's an example of a simple \`if\` statement that checks if a number is greater than 5:`}
      </Markdown>
      {renderCodeBlock(codeSnippets.conditionals, "conditionals")}
      <Markdown>
        {`# **Lists**

Lists (arrays) in TypeScript can store multiple values of a specific type. Here’s an example of an array of strings and how to iterate over it:`}
      </Markdown>
      {renderCodeBlock(codeSnippets.lists, "lists")}
    </div>
  );
};

export default Typescript;
