import AllRoutes from "./routes";
import { AppProvider } from "./context/AppProvider";
import { ToastProvider } from "./context/ToastContext";
import ToastContainer from "./components/ToastContainer";

function App(): JSX.Element {
  return (
    <>
      <AppProvider>
        <ToastProvider>
          <AllRoutes />
          <ToastContainer />
        </ToastProvider>
      </AppProvider>
    </>
  );
}

export default App;
