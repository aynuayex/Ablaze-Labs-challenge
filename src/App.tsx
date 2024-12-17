import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layout/root-layout";
import HomePage from "./routes/Home";

// import DashboardLayout from "./layouts/dashboard-layout";
// import VehicleForm from "./routes/vehicle-form";
// import DashboardPage, { vehiclesDataLoader } from "./routes/dashboard";
// import ThemeContextProvider from "@/contexts/theme-context";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="/qr" element={<QR />} /> */}
        {/* <Route path="/notifications" element={<QR />} /> */}
        {/* <Route
          path="sign-in"
          element={
            <div className="flex justify-center">
              <SignIn />
            </div>
          }
        />
        <Route
          path="sign-up"
          element={
            <div className="flex justify-center">
              <SignUp />
            </div>
          }
        /> */}
      </Route>
    ),
    {
      future: {
        v7_relativeSplatPath: true,
        v7_startTransition: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );

  return (
    // <ThemeContextProvider>
      <RouterProvider
        router={router}
        // future={{
        //   v7_startTransition: true,
        // }}
      />
      // <Toaster />
    // </ThemeContextProvider>
  );
}

export default App;
