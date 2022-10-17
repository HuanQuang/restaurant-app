import './login.scss';
import ImageAuth from '../../assets/Auth/Image';
import { useState } from 'react';
import MainRoutes from '../../routes/Routes';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Login() {
    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        let expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    }
    function getCookie(cname) {
        let name = cname + '=';
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const handleUsername = (e) => {
        setUsername(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleLogin = () => {
        axios.post('http://localhost:5000/user/login', { username: username, password: password }).then((response) => {
            if (response.data.token) {
                setCookie('token', response.data.token, 1);
                setMessage('');
            } else {
                setMessage(response.data.message);
            }
        });
    };
    return (
        <div className="login-Page">
            <div className="login__wrap">
                <div className="login__wrap--img">
                    <img src={ImageAuth.thum} alt="img"></img>
                </div>
                <div className="login__wrap--box">
                    <div className="login__form">
                        <h2>JOIN WITH US</h2>
                        <p className="login__form--qa">
                            Don't have an Account?{' '}
                            <Link to={MainRoutes.REGISTER.path} className="toCreate">
                                Create an account
                            </Link>
                        </p>
                        <form className="login__form--field">
                            <p className="login__form--field--message">{message}</p>
                            <label>
                                Username
                                <div className="login__form--field--input">
                                    <i class="fa-solid fa-envelope"></i>
                                    <input
                                        required="true"
                                        placeholder="Your Username"
                                        type="email"
                                        onChange={handleUsername}
                                    ></input>
                                </div>
                            </label>
                            <label>
                                Password
                                <div className="login__form--field--input">
                                    <i className="fa-solid fa-lock"></i>
                                    <input
                                        placeholder="Your password"
                                        type="password"
                                        required="true"
                                        onChange={handlePassword}
                                    ></input>
                                </div>
                            </label>
                            <div className="login__choose">
                                <input type="checkbox"></input>
                                <span>Save your password</span>
                            </div>
                        </form>
                        <button className="submit--btn" onClick={handleLogin}>
                            LOG IN
                        </button>
                        <span className="login__separate">
                            <span>OR</span>
                        </span>
                        <div className="login--logo" id="googleButton">
                            <img src={ImageAuth.ggIcon} alt="logo"></img>
                            <span>Log in with Google</span>
                        </div>
                        <div className="login--logo">
                            <i class="fa-brands fa-square-facebook"></i>
                            <span>Log in with Facebook</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
