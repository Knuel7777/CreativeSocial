import {} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ForumPage } from "./Pages/Forum";
import LoginPage from "./Pages/Login.tsx";
import  ProfilePage  from "./components/ProfileComponent/ProfilePage.tsx";


import NavbarComponent from "./components/NavbarComponent/NavbarComponent";

function App() {
  return (
    <div className="px-3 h-100">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/Forum" element={<ForumPage />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 
