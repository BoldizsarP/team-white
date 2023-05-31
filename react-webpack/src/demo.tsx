import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.body).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
