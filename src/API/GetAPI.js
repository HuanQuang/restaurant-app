import { useLayoutEffect, useState } from 'react';
import Pagination from '../Page/shop/shopCategory/Pagination';
import { useNavigate } from 'react-router-dom';
import MainRoutes from '../routes/Routes';
import { getUser } from '../Features/UserSlice';
const axios = require('axios').default;

const Product = ({ props }) => {
    const [data, setData] = useState([]);
    const Navigate = useNavigate();
    useLayoutEffect(() => {
        axios
            .get(`https://ig-food-menus.herokuapp.com/${props}`)
            .then((res) => {
                setData(res.data);
            })
            .catch(() => {
                Navigate(MainRoutes.ERROR.path);
            });
    }, [props, Navigate]);
    return <Pagination data={data} />;
};
const LoginState = async (username, password, navigate, dispatch) => {
    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        let expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    }
    await axios
        .post('http://localhost:5000/user/login', { username: username, password: password })
        .then((response) => {
            if (response.data.token) {
                const action = getUser(response.data);
                dispatch(action);
                setCookie('token', response.data.token, 0.04);
                setTimeout(() => navigate(MainRoutes.HOME.path), 4000);
            } else {
                alert(response.data.message);
            }
        })
        .catch((err) => console.log(err));
};
export { LoginState };
export default Product;
