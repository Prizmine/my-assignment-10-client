import { Outlet } from "react-router";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import backgroundImage from "/nice-wood-kitchen.jpg";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100%",
      }}
    >
      <header className="sticky top-0 z-10">
        <Nav></Nav>
      </header>
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer autoClose={4000} />
    </div>
  );
}

export default App;
