import { useLayoutEffect, useState } from 'react';
import Pagination from '../Page/shop/shopCategory/Pagination';
import { useNavigate } from 'react-router-dom';
import MainRoutes from '../routes/Routes';
const axios = require('axios').default;

function Product({ props }) {
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
}

export default Product;
