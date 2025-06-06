import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { LandingPage } from "./pages/LandingPage";
import { StayPage } from "./pages/StayPage";
import GuidesPage from "./pages/GuidesPage";
import EventsPage from "./pages/EventsPage";
import ExplorePage from "./pages/ExplorePage";
import { ThemeProvider, LanguageProvider } from "./hooks";

function App() {
  // GitHub Pages base path para produção
  const basename = import.meta.env.PROD ? '/cop-30' : '';
  
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router basename={basename}>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/stay" element={<StayPage />} />
                <Route path="/guides" element={<GuidesPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/explore" element={<ExplorePage />} />
              </Routes>
            </main>
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
