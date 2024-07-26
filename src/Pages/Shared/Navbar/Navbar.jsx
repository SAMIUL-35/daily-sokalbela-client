import { Link } from "react-router-dom";

const Navbar = () => {
    
    const options = <>
        <li className="mx-3 uppercase text-2xl text-gray-300"><Link to="/">Home</Link></li>
        <li className="mx-3 uppercase text-2xl text-gray-300"><Link to="/addar">Add articles</Link></li>
        <li className="mx-3 uppercase text-2xl text-gray-300" ><Link to="/all">All Articles</Link></li>
        <li className="mx-3 uppercase text-2xl text-gray-300"  ><Link to="/subcrip">Subscription</Link></li>
        <li className="mx-3 uppercase text-2xl text-gray-300"  ><Link to="/dashboard">Dashboard</Link></li>
        <li className="mx-3 uppercase text-2xl text-gray-300"  ><Link to="/myarticle">My Article</Link></li>
        <li className="mx-3 uppercase text-2xl text-gray-300"  ><Link to="/login">Login</Link></li>
        <li className="mx-3 uppercase text-2xl text-gray-300"  ><Link to="/signup">Sign Up</Link></li>
    </>;

    return (
        <div className="navbar bg-base-100 m-4">
            <div className="navbar-start lg:hidden">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {options}
                    </ul>
                </div>
            </div>
            <div className=" lg:flex w-full">
                <ul className=" w-full flex  justify-center mx-4">
                    {options}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
