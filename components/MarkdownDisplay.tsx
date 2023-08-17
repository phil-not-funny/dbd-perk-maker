import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const MarkdownDisplay: React.FC<{ value: string; className?: string }> = ({
  value,
  className,
}) => {
  return (
    <ReactMarkdown
      className={
        "p-4 text-white/80 font-[450] font-roboto text-[0.9rem] " + className
      }
      allowedElements={[
        "br",
        "strong",
        "em",
        "blockquote",
        "span",
        "p",
        "ul",
        "li",
      ]}
      components={{
        blockquote: ({ node, ...props }) => (
          <span className="text-beige italic" {...props} />
        ),
        span: ({ node, ...props }) => (
          <span className={`!text-${props.className}`} {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className="relative pl-2 mt-0.5">
            <span className="absolute top-0 left-0">&#x2022; </span>
            <span className="ml-2 inline-block leading-tight">
              {props.children}
            </span>
          </li>
        ),
      }}
      rehypePlugins={[rehypeRaw]}
    >
      {value}
    </ReactMarkdown>
  );
};

export default MarkdownDisplay;
