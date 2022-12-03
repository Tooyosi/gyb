import AppRoutes from 'Routes/Routes';
import { ToastContainer } from "react-toastify";
import 'assets/scss/main.scss';

function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
