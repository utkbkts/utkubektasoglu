import Markdown from "@/components/markdown/Markdown";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Python = () => {
  const codeSnippets = {
    variables: `name = 'John'
age = 25
is_student = True`,
    functions: `def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))`,
    loops: `for i in range(5):
    print(i)`,
    conditionals: `num = 10
if num > 5:
    print("Greater than 5")
else:
    print("Less than or equal to 5")`,
    lists: `fruits = ['apple', 'banana', 'cherry']
for fruit in fruits:
    print(fruit)`,
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
      <SyntaxHighlighter language="python" style={atomOneDark}>
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
        {`# 🚀 **Mastering Python: A Versatile Programming Language**

## Understanding Python

Python is a powerful and beginner-friendly programming language that is widely used in web development, data science, artificial intelligence, and more. Its simple syntax and vast ecosystem make it a top choice for developers worldwide.

### Variables and Data Types
Python supports multiple data types like strings, integers, floats, lists, and more. Variables are dynamically typed and can be declared without specifying the type.
        `}
      </Markdown>
      {renderCodeBlock(codeSnippets.variables)}
      <Markdown>
        {`# **Functions**

Functions in Python are blocks of reusable code that perform a specific task. Here's an example of a simple function:`}
      </Markdown>
      {renderCodeBlock(codeSnippets.functions)}
      <Markdown>
        {`# **Loops**

Python provides several ways to iterate over data, including \`for\` and \`while\` loops. Here's an example:`}
      </Markdown>
      {renderCodeBlock(codeSnippets.loops)}
      <Markdown>
        {`# **Conditionals**

Conditionals in Python allow you to execute code based on conditions. Here's an example:`}
      </Markdown>
      {renderCodeBlock(codeSnippets.conditionals)}
      <Markdown>
        {`# **Lists**

Lists in Python are versatile and can store multiple values. Here's an example of iterating over a list:`}
      </Markdown>
      {renderCodeBlock(codeSnippets.lists)}
    </div>
  );
};

export default Python;
