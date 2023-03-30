import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop1 from "./pages/login/Desktop1";
import Desktop2 from "./pages/Book/Desktop2";
import Desktop3 from "./pages/login/Desktop3";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/Book":
        title = "";
        metaDescription = "";
        break;
      case "/ForgetPassward":
        title = "";
        metaDescription = "";
        break;
      default:
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop1 />} />
      <Route path="/Book" element={<Desktop2 />} />
      <Route path="/ForgetPassword" element={<Desktop3 />} />
    </Routes>
  );
}
export default App;