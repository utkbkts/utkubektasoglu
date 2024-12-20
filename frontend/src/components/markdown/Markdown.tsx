import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  children: string;
}

export default function Markdown({ children }: Props) {
  return (
    <ReactMarkdown
      className="space-y-3"
      remarkPlugins={[remarkGfm]}
      components={{
        ul: (props) => <ul className="list-disc pl-5" {...props} />,
        li: (props) => <li className="my-1" {...props} />,
        a: (props) => (
          <a className="text-green-500 underline" target="_blank" {...props} />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
