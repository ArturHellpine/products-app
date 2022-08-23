import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='h-[50px] flex justify-between px-5 bg-gray-500 text-white items-center'>
            <span className='font-bold'>React 2022</span>
            <span>
                <Link className='mr-3' to='/products'>Products</Link>
                <Link to='/about'>About</Link>
            </span>
        </nav>
    );
};

export default Navbar;