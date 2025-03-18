import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

export default function Layout() {
    const {user} = useContext(AppContext);


    return(
        <>
            <header>
                <nav>
                    <Link to="/" className="nav-link">Home</Link>
                    {user ? (<div><p>Baszódj meg {user.name}</p>
                    Logout rész
                    </div>) : (
                    <div>
                        <Link to="/register" className="nav-link">Register</Link>
                        <Link to="/login" className="nav-link">Login</Link>
                    </div>)}
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    )
}