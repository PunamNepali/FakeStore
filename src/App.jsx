import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ProductsList from "./ProductsList";
import CategoryPage from "./CategoryPage";
import ProductPage from "./ProductPage";
import CartPage from "./CartPage";
import Footer from "./Footer";
import { CartProvider } from "./CartContext"; // import the context
import AboutPage from "./About";
import ContactPage from "./Contact";
import PrivacyPolicyPage from "./PrivacyPolicy";
import TermsandConditionPage from "./TermsandCondition";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <CartProvider>
      <div>
        <Navbar />
         <ScrollToTop />
        <div className="pt-24"> 
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/category/:category" element={<ProductsList />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsandConditionPage />} />
          
          </Routes>
          <Footer />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
