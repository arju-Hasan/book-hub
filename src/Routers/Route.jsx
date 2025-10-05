import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Pages/Roots/Root";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ReadList from "../Pages/ReadList/ReadList";
 
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        index: true,
        loader: () => fetch("booksData.json"),
        Component: Home,
      },
      {
        path: "/listedBook",
        loader: () => fetch("booksData.json"),
        Component: ReadList,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
