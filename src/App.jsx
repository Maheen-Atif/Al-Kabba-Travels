import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "./Pages/Index";
import PackagePage from "./Pages/PackagePage";
import DeparturePage from "./Pages/DeparturePage";
import StopOverPage from "./Pages/StopOverPage";
import ContactPage from "./Pages/ContactPage";
import FreeSession from "./Pages/FreeSession";
import FeaturedTours from "./Pages/FeaturedTours";
import BookNow from "./Pages/BookNow";
import FeaturedTours2 from "./Pages/FeaturedTours2";
import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/BlogPage";
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage";
import TermsPage from "./Pages/TermsPage";
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
        <Route path="/featured-tours-2" element={<FeaturedTours2 />} />
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
        <Route path="/terms" element={<TermsPage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;