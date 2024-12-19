import Markdown from "@/components/markdown/Markdown";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Golang = () => {
  const codeSnippets = {
    variables: `var name string = "John"
var age int = 25
var isStudent bool = true`,
    functions: `package main
import "fmt"

func greet(name string) string {
    return fmt.Sprintf("Hello, %s!", name)
}

func main() {
    fmt.Println(greet("Alice"))
}`,
    loops: `package main
import "fmt"

func main() {
    for i := 0; i < 5; i++ {
        fmt.Println(i)
    }
}`,
    conditionals: `package main
import "fmt"

func main() {
    num := 10
    if num > 5 {
        fmt.Println("Greater than 5")
    } else {
        fmt.Println("Less than or equal to 5")
    }
}`,
    arrays: `package main
import "fmt"

func main() {
    fruits := []string{"apple", "banana", "cherry"}
    for _, fruit := range fruits {
        fmt.Println(fruit)
    }
}`,
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
      <SyntaxHighlighter language="go" style={atomOneDark}>
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
        {`# 🚀 **Mastering Go: The Language of Efficiency**

## Understanding Go

Go (or Golang) is a statically typed, compiled programming language designed for simplicity, reliability, and high performance. Created by Google, it is particularly popular for server-side development and cloud-based applications.

### Variables and Data Types
Go supports various data types like strings, integers, floats, booleans, and arrays. Variables must be explicitly declared with types or inferred using the short declaration operator.
        `}
      </Markdown>
      {renderCodeBlock(codeSnippets.variables)}
      <Markdown>
        {`# **Functions**

Functions in Go allow you to encapsulate logic for reuse. Here's an example:`}
      </Markdown>
      {renderCodeBlock(codeSnippets.functions)}
      <Markdown>
        {`# **Loops**

Loops in Go are simple and efficient. Here's an example of a \`for\` loop:`}
      </Markdown>
      {renderCodeBlock(codeSnippets.loops)}
      <Markdown>
        {`# **Conditionals**

Go uses \`if\` statements for conditionals. Here's an example:`}
      </Markdown>
      {renderCodeBlock(codeSnippets.conditionals)}
      <Markdown>
        {`# **Arrays**

Arrays and slices in Go are used to store collections of elements. Here's an example of iterating over a slice:`}
      </Markdown>
      {renderCodeBlock(codeSnippets.arrays)}
    </div>
  );
};

export default Golang;
