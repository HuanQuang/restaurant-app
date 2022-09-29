import './login.scss';
import ImageAuth from '../../assets/Auth/Image';
import auth from '../../firebase-conflig';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import MainRoutes from '../../routes/Routes';
// import { handleSignUp } from './Auth';
function Login() {
    const Navigate = useNavigate();
    const handleSignUp = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((rel) => {
                const email = rel.user.email;
                const name = rel.user.displayName;
                const avatar = rel.user.photoURL;
                localStorage.setItem('email', email);
                localStorage.setItem('name', name);
                localStorage.setItem('avatar', avatar);
                setTimeout(Navigate(MainRoutes.HOME.path), 2000);
            })
            .catch((error) => {
                console.log('error', error);
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
                            Don't have an Account? <span className="toCreate">Create an account</span>
                        </p>
                        <div className="login__form--field">
                            <label>
                                Email address
                                <div className="login__form--field--input">
                                    <i class="fa-solid fa-envelope"></i>
                                    <input placeholder="Your email" type="email"></input>
                                </div>
                                <span className="message"></span>
                            </label>
                            <label>
                                Password
                                <div className="login__form--field--input">
                                    <i className="fa-solid fa-lock"></i>
                                    <input placeholder="Your password" type="password"></input>
                                </div>
                                <span className="message"></span>
                            </label>
                            <div className="login__choose">
                                <input type="checkbox"></input>
                                <span>Save your password</span>
                            </div>
                        </div>
                        <button className="submit--btn">LOG IN</button>
                        <span className="login__separate">
                            <span>OR</span>
                        </span>
                        <div className="login--logo" id="googleButton" onClick={handleSignUp}>
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
