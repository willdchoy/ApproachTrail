import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainContent from "./components/MainContent/MainContent";
import Header from "./components/Header/Header";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <div className="app app-wrapper">
          <Header />
          <MainContent />
        </div>
      </>
    </QueryClientProvider>
  );
}

export default App;
