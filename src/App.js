import "./App.css";
import Downloader from "./components/Downloader";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-w-full min-h-screen flex flex-col">
      <Navbar />
      <Downloader />
    </div>
  );
}

export default App;
