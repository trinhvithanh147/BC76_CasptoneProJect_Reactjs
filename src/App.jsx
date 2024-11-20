import { useRoutes } from "react-router-dom"
import { pathDefault } from "./common/path";
import HomeTemplate from "./template/HomeTemplate/HomeTemplate";
import { createContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, toast, ToastContainer } from "react-toastify";
export const NotificationContext = createContext()
const arrRoute = [
  {
    path: pathDefault.homePage,
    element: <HomeTemplate />
  }
];
function App() {
  const routes = useRoutes(arrRoute);
  const handleNotification = (type, content, timeClose = 3000) => {
    toast[type](content, {
      position: "top-right",
      autoClose: timeClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }
    return (
      <>
        <NotificationContext.Provider value={handleNotification}>
          {routes}
          <ToastContainer />
        </NotificationContext.Provider>
      </>
    )
  }

  export default App
