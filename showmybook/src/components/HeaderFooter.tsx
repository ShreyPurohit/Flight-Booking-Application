import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <nav className='bg-blue-500 text-red-300 text-5xl tracking-wide text-center p-3'>Welcome To ShowMyBook</nav>
            <div className='bg-white text-red-400 p-2 shadow-md flex gap-x-3 justify-center'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </>
    )
}

export const Footer = () => {
    return (
        <div className="bg-blue-500 text-red-300 text-1xl tracking-wide text-center p-1 absolute inset-x-0 bottom-0">
            @2024 Show My Book, Inc. All Rights Reserved.
        </div>
    );
}

