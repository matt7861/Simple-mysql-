import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Books } from "./pages/Books";
import { Add } from "./pages/Add";
import { Update } from "./pages/Update";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Books />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/update/:id",
        element: <Update />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
