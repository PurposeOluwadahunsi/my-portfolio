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
          "relative max-w-[80%] break-words rounded-3xl px-4 py-2.5 text-body-sm",
          isUser
            ? "rounded-br-md bg-accent text-white"
            : "rounded-bl-md bg-secondary text-foreground",
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "absolute bottom-0 h-3 w-3",
            isUser
              ? "-right-1 rounded-bl-full bg-accent"
              : "-left-1 rounded-br-full bg-secondary",
          )}
        />

        <ReactMarkdown
          components={{
            code({ className, children, ...props }) {
              const isBlock = /language-/.test(className || "");
              if (!isBlock) {
                return (
                  <code className="rounded bg-background/20 px-1 py-0.5 text-code" {...props}>
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

function CodeBlock({ className, children }: { className?: string; children: React.ReactNode }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(String(children)).catch(() => {});
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
      <pre className="overflow-x-auto p-4 text-code">
        <code className={className}>{children}</code>
      </pre>
    </div>
  );
}