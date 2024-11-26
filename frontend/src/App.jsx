import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserProfile from "./pages/UserProfile";
import UserAppointment from "./pages/UserAppointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/user-appointment" element={<UserAppointment />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
