"use client";
import { initializePersister } from "@/shared/core/queryClient";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

export const QueryProvider = ({ children }: { children: ReactNode }) => {
  initializePersister();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
