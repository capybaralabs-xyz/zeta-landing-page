import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Root from "./routes/Root";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import PageLoader from "./routes/PageLoader";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import theme from "./theme";

// lazy load components
const Temp = lazy(() => import("./routes/Temp"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/temp",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Temp />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const _theme = extendTheme(theme);
root.render(
  // <React.StrictMode>
    <ChakraProvider theme={_theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
