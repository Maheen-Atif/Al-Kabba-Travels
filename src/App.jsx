import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "./pages/Index";
import PackagePage from "./pages/PackagePage";
import DeparturePage from "./pages/DeparturePage";
import StopOverPage from "./pages/StopOverPage";
import ContactPage from "./pages/ContactPage";
import FreeSession from "./pages/FreeSession";
import FeaturedTours from "./pages/FeaturedTours";
import BookNow from "./Pages/BookNow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/packages/:month" element={<PackagePage />} />
        <Route path="/departure/:city" element={<DeparturePage />} />
        <Route path="/stopover/:place" element={<StopOverPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/free-session" element={<FreeSession />} />
        <Route path="/featured-tours" element={<FeaturedTours />} />
        <Route path="/book-now" element={<BookNow/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;