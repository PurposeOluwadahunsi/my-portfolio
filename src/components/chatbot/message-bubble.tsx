"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Check, Copy } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ChatMessage } from "@/hooks/use-chat";

export function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-2.5 text-body-sm",
          isUser ? "bg-accent text-white" : "border border-border bg-card text-foreground",
        )}
      >
        <ReactMarkdown
          components={{
            code({ className, children, ...props }) {
              const isBlock = /language-/.test(className || "");
              if (!isBlock) {
                return (
                  <code className="rounded bg-secondary px-1 py-0.5 text-code" {...props}>
                    {children}
                  </code>
                );
              }
              return <CodeBlock className={className}>{children}</CodeBlock>;
            },
            p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
          }}
        >
          {message.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

function CodeBlock({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(String(children));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="relative my-2 overflow-hidden rounded-lg border border-border bg-background">
      <button
        onClick={handleCopy}
        aria-label="Copy code"
        className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card text-muted-foreground hover:text-foreground"
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
      <pre className={cn("overflow-x-auto p-4 text-code", className)}>
        <code>{children}</code>
      </pre>
    </div>
  );
}