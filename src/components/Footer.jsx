import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-sky-500 text-white p-2 text-center  bottom-0 w-full shadow-md">
      <p>© {new Date().getFullYear()} MyFakeStore. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
        <Link to="/privacy" className="hover:underline">
          Privacy Policy
        </Link>
        <Link to="/terms" className="hover:underline">
          Terms and Conditions
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
