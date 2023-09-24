import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import Root from "./components/Root.jsx";
import Loader from "./components/Loader.jsx";
const Verification = lazy(() => import("./components/VerifyCode.jsx"));
const Home = lazy(() => import("./components/Home.jsx"));
const TestForm = lazy(() => import("./components/TestForm.jsx"));
const TakeTest = lazy(() => import("./components/TakeTest.jsx"));
const SignUpForm = lazy(() => import("./components/SignUp.jsx"));
const SignIn = lazy(() => import("./components/SignIn.jsx"));
const TestList = lazy(() => import("./components/TestList.jsx"));

/*protected route */

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<Loader />}>
            <SignUpForm />
          </Suspense>
        ),
      },
      {
        path: "/verifycode",
        element: (
          <Suspense fallback={<Loader />}>
            <Verification />
          </Suspense>
        ),
      },
      {
        path: "/signin",
        element: (
          <Suspense fallback={<Loader />}>
            <SignIn />
          </Suspense>
        ),
      },

      {
        path: "addquestion",
        element: (
          <Suspense fallback={<Loader />}>
            <TestForm />
          </Suspense>
        ),
      },
      {
        path: "/testlist",
        element: (
          <Suspense fallback={<Loader />}>
            <TestList />
          </Suspense>
        ),
      },
      {
        path: "/taketest/:quizId",
        element: (
          <Suspense fallback={<Loader />}>
            <TakeTest />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loader />}>
            <div className="notFound">
              <h1 >404 not found</h1>
            </div>
           
          </Suspense>
        ),
      }
    ],
  },
]);
