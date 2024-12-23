import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import AddSong from "./pages/AddSong";
import AddAlbum from "./pages/AddAlbum";
import ListSongs from "./pages/ListSongs";
import ListAlbums from "./pages/ListAlbums";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";



const App = () => {
  return (
    <div className="flex items-start min-h-screen">
      <ToastContainer />
      <Sidebar />
      <div className="flex-1 h-screen overflow-y-scroll bg-[#f3fff7]">
        <Navbar />
        <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
          <Routes>
            <Route path="/add-song" element={<AddSong />} />
            <Route path="/add-album" element={<AddAlbum />} />
            <Route path="/list-songs" element={<ListSongs />} />
            <Route path="/list-albums" element={<ListAlbums />} />
          </Routes>
        </div>
      </div>
    </div>
    
  );
};

export default App;
