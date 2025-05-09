// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Bills from "./pages/Bills/Bills";
import BillDetails from "./pages/BillDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyProfile from "./pages/MyProfile";
import UpdateProfile from "./pages/UpdateProfile";
import PrivateRoute from "./routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "bills",
        element: <Bills />,
      },
      {
        path: "bills/:id",
        element: <PrivateRoute><BillDetails /></PrivateRoute>,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "my-profile",
        element: <PrivateRoute><MyProfile /></PrivateRoute>,
      },
      {
        path: "update-profile",
        element: <PrivateRoute><UpdateProfile /></PrivateRoute>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
