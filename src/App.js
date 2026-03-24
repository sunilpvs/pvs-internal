import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import AccessDenied from "./pages/accessRequest/AccessDenied";
import PageNotFound from "./pages/errors/PageNotFound";
import LoginForm from "./components/auth/LoginForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import HolidayCalendar from "./pages/HolidayCalendar";
import UnderDevelopment from "./pages/UnderDevelopment";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/access-denied" element={<AccessDenied />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/under-development" element={<UnderDevelopment />} />
        
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UnderDevelopment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/holiday-calendar"
          element={
            <ProtectedRoute>
              <HolidayCalendar />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;