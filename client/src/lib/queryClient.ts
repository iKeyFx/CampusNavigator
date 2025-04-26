import { QueryClient } from "@tanstack/react-query";

// Simplified version for client-side only operations
// No server API calls will be needed since all data is static

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
