
import { Helmet } from 'react-helmet-async';
import AuthForm from './AuthForm';
import UserRegister from './userRegister';
import { userLogin } from '../../services/apiServices';
import Toaster from '../../utils/Toster';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate()
    const handleLogin = async (formData) => {
        try {
            const response = await userLogin(formData);
            // Check if the response indicates a successful login
            if (response) {
                Toaster("Login Success", 101, ["success"]);
                localStorage.setItem('token', JSON.stringify(response.data));
                navigate('/home')
            } else {
                Toaster("Login failed", 102, ["error"]);
            }
        } catch (error) {
            Toaster("Login failed", 103, ["error"]);
        }
    };
    const fields = [
        { name: 'email', type: 'text', placeholder: 'Email Address' },
        { name: 'password', type: 'password', placeholder: 'Password' },
    ];

    return (
        <>
            <Helmet>Userlogin</Helmet>
            <section
                className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("/assets/background.webp")' }}
            >
                
                <div className="md:w-1/3 max-w-sm">
                    <img
                        src="/assets/login.gif"
                        alt="Sample image" />
                </div>
                <div className="md:w-1/3 max-w-sm">
                    <AuthForm onSubmit={handleLogin} buttonText="Login" fields={fields} />
                    <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                        Don't have an account? <UserRegister />
                    </div>
                </div>
            </section>
        </>
    );
}
