import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { PublicRoute, PrivateRoute } from "./routes";
import { ProtectedRoute } from "./services/authService";
import DefaultAdmin from "./components/Layouts/Admin/Default";
import DefaultLayout from "./components/Layouts/Default";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/scss/ToastStyle.scss";
import "./assets/scss/Global.scss";
import NotFound from "./pages/404";
import { SongProvider } from "./context/SongsContext";
import AudioPlayer from "./components/AudioPlayer";

const getLayout = (pathname: string) => {
  if (pathname.includes("dashboard")) {
    return DefaultAdmin;
  }
  return DefaultLayout;
};
const AudioPlayerWrapper: React.FC = () => {
  const location = useLocation();
  // Ẩn AudioPlayer khi đường dẫn chứa "dashboard", "login", hoặc "register"
  const hideAudioPlayer =
    location.pathname.includes("dashboard") ||
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  return <>{!hideAudioPlayer && <AudioPlayer />}</>;
};

const App = () => {
  return (
    <SongProvider>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          pauseOnFocusLoss
        />
        <AudioPlayerWrapper />
        <Routes>
          {PublicRoute.map((route, index) => {
            const Page = route.component;
            const Layout =
              route.layout === false ? Fragment : getLayout(route.path);
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {PrivateRoute.map((route, index) => {
            const Page = route.component;
            const Layout =
              route.layout === false ? Fragment : getLayout(route.path);
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <ProtectedRoute route={route.path}>
                    <Layout>
                      <Page />
                    </Layout>
                  </ProtectedRoute>
                }
              />
            );
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </SongProvider>
  );
};

export default App;
