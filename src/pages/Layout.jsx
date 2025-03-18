import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

export default function Layout() {
    const {user, token, setUser, setToken} = useContext(AppContext);
    const navigate = useNavigate();

    async function handleLogout(e) {
        e.preventDefault();

        const res = await fetch('/api/logout', {
            method: 'post',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await res.json();
        console.log(data);

        if(res.ok){
            setUser(null);
            setToken(null);
            localStorage.removeItem("token");
            navigate('/');
        }
    }


    return(
        <>
            <header>
                <nav>
                    {user ? (<div><p>Üdvözöllek {user.name}</p>
                    <form onSubmit={handleLogout}>
                        <button className="nav-Link">Kijelentkezés</button>
                    </form>
                    </div>) : (
                        <div className="d-flex gap-3">
                        </div>)}
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    )
}