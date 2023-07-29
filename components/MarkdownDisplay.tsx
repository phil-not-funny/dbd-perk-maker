import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const MarkdownDisplay: React.FC<{ value: string }> = ({ value }) => {
  return (
    <ReactMarkdown
      className="p-4 text-white/80 font-[450] font-roboto text-[0.9rem]"
      allowedElements={[
        "br",
        "strong",
        "em",
        "blockquote",
        "span",
        "p",
      ]}
      components={{
        blockquote: ({ node, ...props }) => (
          <span className="text-beige italic" {...props} />
        ),
        span: ({ node, ...props }) => (
          <span className={`!text-${props.className}`} {...props} />
        ),
      }}
      rehypePlugins={[rehypeRaw]}
    >
      {value}
    </ReactMarkdown>
  );
};

export default MarkdownDisplay;
