import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home";
import PrivacyPolicy from "./pages/privacy-policy";
import OverView from "./pages/over-view";
import Test from "./pages/test";

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
      case "/privacypolicy":
        title = "";
        metaDescription = "";
        break;
      case "/overview":
        title = "";
        metaDescription = "";
        break;
        case "/test":
        title = "";
        metaDescription = "";
        break;
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
      <Route path="/" element={<Home />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/overview" element={<OverView />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}
export default App;
