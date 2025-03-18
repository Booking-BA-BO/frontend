import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

export default function Register() {

    const {token, setToken} = useContext(AppContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [errors, setErrors] = useState({})

    async function handleRegister(e) {
        e.preventDefault();
        const res = await fetch('/api/register', {
            method: "post",
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.errors) {
            setErrors(data.errors)
        }else{
            localStorage.setItem('token', data.token);
            setToken(data.token);
            navigate('/');
            console.log(data);
        }

    }

    return(
        <>
            <h1 className="title">Regisztrálj egy új felhasználót!</h1>
            <form onSubmit={handleRegister} className="w-1/2 mx-auto space-y-6" action="">
                <div>
                    <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    {errors.title && <p className="error">{errors.name[0]}</p>}
                </div>
                <div>
                    <input type="text" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                    {errors.title && <p className="error">{errors.email[0]}</p>}
                </div>
                <div>
                    <input type="password" placeholder="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                    {errors.title && <p className="error">{errors.password[0]}</p>}
                </div>
                <div>
                    <input type="password" placeholder="password_confirmation" value={formData.password_confirmation} onChange={(e) => setFormData({...formData, password_confirmation: e.target.value})}/>
                </div>

                <button className="primary-btn">Register</button>
            </form>
        </>
    );
}