import Approutes from "./routes/Routes";
import { ShowNavbar } from "./components/utils/ShowNavbar/ShowNavbar";
import Navbar from "./components/main-components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster />
      <ShowNavbar>
        <Navbar />
      </ShowNavbar>
      <Approutes />
    </div>
  );
}

export default App;
