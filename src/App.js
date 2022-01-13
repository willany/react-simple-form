import { QueryClient, QueryClientProvider } from "react-query";
import Form from "./Form";

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <Form />
  </QueryClientProvider>
  );
}

export default App;
