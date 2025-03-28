import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';

function Logout() {
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
                                                        //Átszervezni komponensbe
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
        <div className="kijelentkezes">
            {user ? (<div>
                    <form onSubmit={handleLogout}>  
                        <button className="kijelentkezesGomb">Kijelentkezés</button>
                    </form>
                    </div>) : (
                        <div>
                            FASZ
                        </div>)}
        </div>
    );
}

export default Logout