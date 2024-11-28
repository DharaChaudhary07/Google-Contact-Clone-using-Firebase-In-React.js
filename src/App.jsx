import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import CreateForm from './components/ContactForm/ContactFrom';
import Sidebar from './components/SideBar/SideBar';
import Edit from './components/Edit/Edit';
import View from './components/View/View';
// import Profile from './components/Profile/Profile';
// import handleViewProfile from './components/ViewProfile/ViewProfile';

function App() {
  

    return (
        <div className="flex h-screen">
            <div className="fixed top-0 left-0 h-full z-50">
                <Sidebar />
            </div>
            <div className={`flex-1 flex flex-col transition-all duration-300 ml-64`}>
                <Header />
                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile/:id" element={<View />} />
                        <Route path="/create" element={<CreateForm />} />
                        <Route path="/edit/:id" element={<Edit />} />
                        {/* <Route path="/view/:id" element={<handleViewProfile />} /> */}
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;