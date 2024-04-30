import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";

//create a cilent
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/shows" element={<TvShows />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
