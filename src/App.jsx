import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { CartProvider } from "./components/CartContext";
import { AuthProvider } from "./components/AuthContext";

// Pages
import ProductsList from "./pages/ProductsList";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsandConditionPage from "./pages/TermsandCondition";
import AuthPage from "./pages/Auth";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div>
          <Navbar />
          <ScrollToTop />
          <div className="pt-24">
            <Routes>
              <Route path="/" element={<ProductsList />} />
              <Route path="/products" element={<ProductsList />} />
              <Route path="/category/:category" element={<ProductsList />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/categories" element={<CategoryPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsandConditionPage />} />
              <Route path="/auth" element={<AuthPage />} />
           
            </Routes>

            <Footer />
          </div>
             <ToastContainer position="top-right" autoClose={3000} />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
