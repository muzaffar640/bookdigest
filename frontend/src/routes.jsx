import { Layout } from "./Layout";
import { Dashboard } from "./pages/Dashboard";
import { BookList } from "./pages/BookList";
import { Book } from "./pages/Book";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { NotFound } from "./pages/NotFound";
import { UserProfile } from "./pages/UserProfile";

export const routeConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "books", element: <BookList /> },
      { path: "books/:bookId", element: <Book /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "notfound", element: <NotFound /> },
      { path: "profile", element: <UserProfile /> },
    ],
  },
];
