import React from "react";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      //   if (error) {
      //     showError(error as AxiosError);
      //   }
      if (query.state.data !== undefined) {
        console.log("Something went wrong");
      }
    },
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

export default function APIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
