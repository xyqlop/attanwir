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

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/beranda" /> },
  { path: "/beranda", element: <Home /> },
  { path: "/tentang", element: <About /> },
  { path: "/galeri", element: <Gallery /> },
  { path: "/kontak", element: <Contact /> },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
