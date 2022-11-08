import { useLayoutEffect, useState } from 'react';
import Pagination from '../Page/shop/shopCategory/Pagination';
import { useNavigate } from 'react-router-dom';
import MainRoutes from '../routes/Routes';
import { getLogin } from '../Features/UserSlice';
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
        .post('https://e-commerce-sever-huanquang.vercel.app/api/account/login', { user: username, password: password })
        .then((response) => {
            if (response.data.token) {
                dispatch(getLogin(response.data));
                setCookie('token', response.data.token, 0.04);
                setTimeout(() => navigate(MainRoutes.HOME.path), 2000);
            } else {
                alert(response.data.message);
            }
        });
};
export { LoginState };
export default Product;
