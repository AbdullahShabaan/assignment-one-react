import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import Contact from "./components/Pages/Contact/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/Pages/NotFound/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "assignment-one-react",
      element: <Layout />,
      children: [
        { path: "assignment-one-react", element: <Home /> },
        { path: "assignment-one-react/about", element: <About /> },
        { path: "assignment-one-react/portfolio", element: <Portfolio /> },
        { path: "assignment-one-react/contact", element: <Contact /> },
        { path: "assignment-one-react/*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <div className="def-content">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
