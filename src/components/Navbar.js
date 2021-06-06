import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="h-14 grid grid-cols-12 px-5 pt-1 border-solid border-b-2 border-green-500 fixed w-full">
            <div className="col-span-6">
                <p className="font-extrabold text-5xl italic text-green-500">TECHNICAL TICKET</p>
            </div>
            <div className="col-span-6">
                <div className="flex flex-wrap justify-end content-center h-12">
                    <Link to="/signup">
                        <button id="signup-btn" className="btn mr-2">SIGN UP</button>
                    </Link>

                    <Link to="/login">
                        <button id="login-btn" className="btn">LOGIN</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
