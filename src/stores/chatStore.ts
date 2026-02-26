// src/stores/chatStore.ts
import { create } from "zustand";
import { Citation } from "../api/types";

export type Message = {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: string;
  citations?: Citation[] | null;
};

interface ChatState {
  messages: Message[];
  addMessage: (msg: Message) => void;
  setMessages: (messages: Message[]) => void;
  prependMessages: (messages: Message[]) => void; 
  clear: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  addMessage: (msg) =>
    set((state: ChatState) => ({
      messages: [...state.messages, msg],
    })),
  clear: () => set({ messages: [] }),
  setMessages: (messages) => 
    set({ messages }),
  prependMessages: (messages) =>
    set((state) => ({ messages: [...messages, ...state.messages] })),
}));
