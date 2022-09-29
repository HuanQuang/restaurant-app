import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { addTocart } from '../../Features/CartSlice';
import { addFeedback } from '../../Features/FeedbackSlice';
import MainRoutes from '../../routes/Routes';
import './detail.scss';
function Detail() {
    const feedbackList = useSelector((state) => state.feedback);
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const param = useParams();
    const [amount, setAmount] = useState(1);

    useEffect(() => {
        axios
            .get(`https://ig-food-menus.herokuapp.com/our-foods/${param.idProduct} `)
            .then((res) => {
                setProduct(res.data);
            })
            .catch(() => {
                setTimeout(Navigate(MainRoutes.ERROR.path), 2000);
            });
    }, [param.idProduct, Navigate]);
    const [show, setShow] = useState(true);
    // Hàm chọn hiển thị nutritional ingredients hoặc feelback
    const handleChoose = (e) => {
        const node = JSON.parse(e.target.dataset.index);
        document.querySelector('.product__detail--nutrion--tab--btn.btn--active').classList.remove('btn--active');
        e.target.closest('.product__detail--nutrion--tab--btn').classList.add('btn--active');
        if (node) {
            setShow(true);
        } else {
            setShow(false);
        }
    };
    // Hàm chọn số lượng sản phẩm muốn mua
    const handleChooseProduct = (e) => {
        const node = e.target.dataset.index;
        document.querySelectorAll('.chooseAmount').forEach((item) => {
            if (item.dataset.index !== node) {
                item.checked = false;
            }
        });
        switch (Number(node)) {
            case 0:
                setAmount(2);
                break;
            case 1:
                setAmount(3);
                break;
            case 2:
                setAmount(5);
                break;
            default:
        }
    };
    const handleAddAmount = () => {
        setAmount(amount + 1);
    };
    const handleRemoveAmount = () => {
        setAmount(amount - 1);
    };
    const handleAddFeedback = () => {
        const boxFeedback = document.getElementById('inputFeedback');
        const action = addFeedback(boxFeedback.value);
        dispatch(action);
        boxFeedback.value = '';
    };

    return (
        <div className="detail--wrapper">
            <div className="banner--shop"></div>;
            <Header />
            <div className="product__detail" key={product.id}>
                <div className="product__detail--overview">
                    <div className="product__detail__img">
                        <img src={product.img} alt="img"></img>
                    </div>
                    <div className="product__detail__content">
                        <div className="product__detail__content--name">{product.name}</div>
                        <div className="product__detail__content--rate">
                            {product.rate === 5 ? (
                                <div style={{ color: '#ffb100' }}>
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                </div>
                            ) : product.rate === 4 ? (
                                <div style={{ color: '#ffb100' }}>
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarBorderIcon />
                                </div>
                            ) : (
                                <div style={{ color: '#ffb100' }}>
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarBorderIcon />
                                    <StarBorderIcon />
                                </div>
                            )}
                        </div>
                        <p className="product__detail__content--price">${product.price}</p>
                        <p className="product__detail__content--country">Country:{product.country}</p>
                        <p className="product__detail__content--dsc">{product.dsc}</p>
                        <h2>Choose your options</h2>
                        <label>
                            <input
                                className="chooseAmount"
                                type="radio"
                                data-index={0}
                                onClick={handleChooseProduct}
                            ></input>
                            <span>Buy 2 get 15 percent off</span>
                        </label>
                        <label>
                            <input
                                className="chooseAmount"
                                type="radio"
                                data-index={1}
                                onClick={handleChooseProduct}
                            ></input>
                            <span>Buy 3 get 25 percent off</span>
                        </label>
                        <label>
                            <input
                                className="chooseAmount"
                                type="radio"
                                data-index={2}
                                onClick={handleChooseProduct}
                            ></input>
                            <span>Buy 5 get 50 percent off</span>
                        </label>
                        <div className="addShop">
                            <div className="addShop__quality">
                                <i className="fa-solid fa-minus" onClick={handleRemoveAmount}></i>
                                <span>{amount}</span>
                                <i className="fa-solid fa-plus" onClick={handleAddAmount}></i>
                            </div>
                            <button
                                className="addShop--btn"
                                onClick={() => {
                                    const action = addTocart(product);
                                    dispatch(action);
                                }}
                            >
                                <i className="fa-solid fa-cart-plus"></i>
                                <span>ADD TO CART</span>
                            </button>
                            <div className="like--btn">
                                <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
                        <div className="product__detail__content--commit">
                            <i className="fa-solid fa-truck"></i>
                            Free global shipping on all orders
                        </div>
                        <div className="product__detail__content--commit">
                            <i className="fa-solid fa-calendar-check"></i>2 hours easy returns if you change your mind
                        </div>
                        <div className="product__detail__content--commit">
                            <i className="fa-solid fa-tag"></i>
                            Order before noon for same day dispatch
                        </div>
                    </div>
                </div>
                <div className="product__detail--nutrion">
                    <div className="product__detail--nutrion--tab">
                        <div
                            className="product__detail--nutrion--tab--btn btn--active"
                            onClick={handleChoose}
                            data-index={'true'}
                        >
                            Description
                        </div>
                        <div className="product__detail--nutrion--tab--btn" onClick={handleChoose} data-index={'false'}>
                            Reviews
                        </div>
                    </div>
                    <div className={`product__detail--nutrion--tabContent ${show ? 'tab--active' : ''}`}>
                        <p className="product__detail--nutrion--tabContent--des">
                            Although the legendary Double Burger really needs no introduction, please allow us… Tucked
                            in between three soft buns are two all-beef patties, cheddar cheese, ketchup, onion, pickles
                            and iceberg lettuce. Hesburger’s own paprika and cucumber mayonnaise add the crowning touch.
                            Oh baby!
                        </p>
                        <table>
                            <tr>
                                <th className="table--border">
                                    Best Foods<p>28 cm size</p>
                                </th>
                                <th className="table--border">
                                    24<p>28 cm size</p>
                                </th>
                                <th className="table--border">
                                    728<p>Energy</p>
                                </th>
                                <th className="table--border">
                                    1054<p>Calo</p>
                                </th>
                                <th className="table--border">
                                    68 <p>Fat</p>
                                </th>
                                <th className="table--border">
                                    25 <p>Gluxit</p>
                                </th>
                                <th className="table--border">
                                    548 <p>Protein</p>
                                </th>
                            </tr>
                            <tr>
                                <th className="table--row2">Ingredients</th>
                                <th className="table--row2">Egg</th>
                                <th className="table--row2">Milk Protein</th>
                                <th className="table--row2">Lactose</th>
                                <th className="table--row2">Sesame</th>
                                <th className="table--row2">Gluten</th>
                                <th className="table--row2">Mustard</th>
                            </tr>
                        </table>
                    </div>
                    <div className={`product__detail--nutrion--tabContent ${show ? '' : 'tab--active'}`}>
                        <input id="inputFeedback" type="text" placeholder="Để lại nhận xét của bạn ở đây..."></input>
                        <button onClick={handleAddFeedback}>POST</button>
                        <div className="feedback_board">
                            {feedbackList.map((item, index) => {
                                if (item == null) {
                                } else {
                                    return (
                                        <li className="comment" key={index}>
                                            <i class="fa-regular fa-user"></i>
                                            <span>:{item}</span>
                                        </li>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Detail;
