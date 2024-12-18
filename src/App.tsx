import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layout/root-layout";
import HomePage from "./routes/Home";
import Recent from "./routes/Recent";
import NearBy from "./routes/NearBy";
import Profile from "./routes/Profile";
import Notifications from "./routes/Notifications";
import Qr from "./routes/Qr";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/nearBy" element={<NearBy />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/qr" element={<Qr />} />
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

  return <RouterProvider router={router} />;
}

export default App;
