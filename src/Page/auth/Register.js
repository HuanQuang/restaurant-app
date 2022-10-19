import './register.scss';
import ImageAuth from '../../assets/Auth/Image';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import MainRoutes from '../../routes/Routes';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Register() {
    const success = (message) =>
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    const loser = (message) =>
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        await axios.post('http://localhost:5000/user/register', data).then((response) => {
            console.log(response.data.message);
            if (response.data.message === 'Đăng kí thành công') {
                success('Đăng kí thành công');
                setTimeout(() => navigate(MainRoutes.LOGIN.path), 4000);
            } else if (response.data.message === 'Tài khoản đã tồn tại') {
                loser(response.data.message);
            } else loser('Đăng kí thất bại');
        });
    };

    return (
        <div className="register-Page">
            <div className="register__wrap">
                <div className="register__wrap--box">
                    <div className="register__form">
                        <h2>JOIN WITH US</h2>
                        <p className="register__form--qa">
                            Do you already have an account?{' '}
                            <Link to={MainRoutes.LOGIN.path} className="toCreate">
                                Login
                            </Link>
                        </p>
                        <form className="register__form--field" onSubmit={handleSubmit(onSubmit)}>
                            <p className="register__form--field--message"></p>
                            <label>
                                Tài khoản
                                <div className="register__form--field--input">
                                    <i class="fa-solid fa-envelope"></i>
                                    <input
                                        placeholder="Username"
                                        type="text"
                                        {...register('user', { required: true, pattern: /^[a-zA-Z0-9\+]*$/ })}
                                    ></input>
                                </div>
                                {errors.user?.type === 'required' && (
                                    <p className="messageError" role="alert">
                                        Username is required
                                    </p>
                                )}
                                {errors.user?.type === 'pattern' && (
                                    <p className="messageError" role="alert">
                                        Username is not valid
                                    </p>
                                )}
                            </label>
                            <label>
                                Mật khẩu
                                <div className="register__form--field--input">
                                    <i className="fa-solid fa-lock"></i>
                                    <input
                                        placeholder="Your password"
                                        type="password"
                                        {...register('password', {
                                            required: true,
                                            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                        })}
                                    ></input>
                                </div>
                                {errors.password?.type === 'required' && (
                                    <p className="messageError" role="alert">
                                        Password is required
                                    </p>
                                )}
                                {errors.password?.type === 'pattern' && (
                                    <p className="messageError" role="alert">
                                        The password must include eight characters, at least one letter and number
                                    </p>
                                )}
                            </label>
                            <label>
                                Giới tính:
                                <select {...register('gender')} className="register__form--field--gender">
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                    <option value="other">Other</option>
                                </select>
                            </label>
                            <label className="register__form--field--ageLabel">
                                Tuổi:
                                <input
                                    type="number"
                                    {...register('age', { required: true, max: 90, min: 10 })}
                                    className="register__form--field--age"
                                />
                                {errors.age?.type === 'required' && (
                                    <p className="messageError" role="alert">
                                        Age is required
                                    </p>
                                )}
                                {errors.age?.type === 'max' && (
                                    <p className="messageError" role="alert">
                                        Age is not valid
                                    </p>
                                )}
                                {errors.age?.type === 'min' && (
                                    <p className="messageError" role="alert">
                                        Age is not valid
                                    </p>
                                )}
                            </label>
                            <button className="submit--btn" type="submit">
                                REGISTER
                            </button>
                        </form>

                        <span className="register__separate">
                            <span>OR</span>
                        </span>
                        <div className="register--logo" id="googleButton">
                            <img src={ImageAuth.ggIcon} alt="logo"></img>
                            <span>Log in with Google</span>
                        </div>
                        <div className="register--logo">
                            <i class="fa-brands fa-square-facebook"></i>
                            <span>Log in with Facebook</span>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={2000} />
        </div>
    );
}

export default Register;
