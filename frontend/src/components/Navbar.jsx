
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow p-4 sticky top-0">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-orange-600 font-bold text-xl">eventbrite</Link>

                {/* Search bar (Hidden on small screens) */}
                <div className="hidden md:flex items-center space-x-4">
                    <div className="flex border rounded-full overflow-hidden">
                        <button className="p-2 pl-3 pr-3 focus:outline-none"><i className="fas fa-search"></i></button>
                        <input
                            type="text"
                            placeholder="Search events"
                            className="px-4 py-2 w-full focus:outline-none"
                        />
                        <button type="submit" href="#" className='bg-[#FF4500] text-white px-[14px] py-[14px]'>&#x1F50D;</button>
                    </div>

                    {/* Location */}
                    <div className='flex border rounded-full overflow-hidden'>
                        <button className='p-[12px]' href="#">&#x1F4CD;</button>
                        <button className='w-full px-[6px]'>Surat</button>
                    </div>
                </div>

                {/* Hamburger Menu Icon (Visible on small screens) */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-800 focus:outline-none">
                        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
                    </button>
                </div>

                {/* Navigation Links (Hidden on small screens, visible on medium+ screens) */}
                <ul className="hidden md:flex space-x-6 items-center">
                    <li>
                        <Link to="/events">Find Events</Link>
                    </li>
                    <li>
                        <Link to="/create-event">Create Event</Link>
                    </li>
                    <li>Help Center</li>
                    <li>Find my tickets</li>
                    <li>
                        <Link to="/login">Log In</Link>
                    </li>
                    <li>
                        <Link to="/register">Sign Up</Link>
                    </li>
                </ul>
            </div>

            {/* Dropdown Menu (Visible on small screens when open) */}
            {isOpen && (
                <ul className="md:hidden mt-4 space-y-4">
                    <li>
                        <Link to="/events" onClick={toggleMenu}>Find Events</Link>
                    </li>
                    <li>
                        <Link to="/create-event" onClick={toggleMenu}>Create Event</Link>
                    </li>
                    <li>Help Center</li>
                    <li>Find my tickets</li>
                    <li>
                        <Link to="/login" onClick={toggleMenu}>Log In</Link>
                    </li>
                    <li>
                        <Link to="/register" onClick={toggleMenu}>Sign Up</Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
