"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface ChatModalContextValue {
  open: boolean;
  openChat: () => void;
  close: () => void;
}

const ChatModalContext = createContext<ChatModalContextValue | null>(null);

export function ChatModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <ChatModalContext.Provider
      value={{ open, openChat: () => setOpen(true), close: () => setOpen(false) }}
    >
      {children}
    </ChatModalContext.Provider>
  );
}

export function useChatModal() {
  const ctx = useContext(ChatModalContext);
  if (!ctx) throw new Error("useChatModal must be used within ChatModalProvider");
  return ctx;
}