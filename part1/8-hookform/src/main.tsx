import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.css";

import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnMount:false,
      refetchOnWindowFocus:false,
      retry:1,
      staleTime: 60 * 1000,
    }
  }
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
          <Toaster />
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>,
);
