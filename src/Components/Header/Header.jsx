import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="flex items-center justify-around p-5 shadow-lg bg-purple-800">
            <div>
                <h1 className="text-3xl text-red-600">Logo</h1>
            </div>
            <div className="text-2xl flex gap-6 font-medium text-green-600 items-center">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                    }
                >
                Home
                </NavLink>
                <NavLink
                    to="/posts"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                    }
                >
                Posts
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                    }
                >
                About
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                    }
                >
                Contact
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;