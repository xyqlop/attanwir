import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Gallery from "./components/pages/Gallery";
import Contact from "./components/pages/Contact";
import { ThemeProvider } from "./contexts/themeContext";

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/info", element: <Gallery /> },
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <Navigate to="/" /> },
  ],
  { basename: "/attanwir" },
);

function handleRedirect() {
  const urlParams = new URLSearchParams(window.location.search);
  const redirect = urlParams.get("redirect");
  if (redirect) {
    setTimeout(() => {
      window.history.replaceState({}, "", redirect);
    }, 2000);
  }
}

handleRedirect();

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
