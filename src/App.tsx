import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/*' element={<Navigate replace to='/products'/>} />
            </Routes>
        </>
    )
};

export default App;
