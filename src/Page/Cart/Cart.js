import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import { addTocart, reduceAmountCart, removeFromCart } from '../../Features/CartSlice';
import MainRoutes from '../../routes/Routes';
import './cart.scss';
function CartPage() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.cart);
    const totalPrice = productList.reduce((current, item) => current + item.price * item.qty, 0);
    return (
        <div className="cart-wrapper">
            <Header />
            <div className="cart-title">
                <h1>Your cart</h1>
                <p>"I say let the world go to hell, but I should always have my tea."</p>
                <p> ― Fyodor Dostoyevsky, Notes from Underground</p>
            </div>
            {productList.length !== 0 ? (
                <div className="cart-product">
                    {productList.map((product) => {
                        return (
                            <div>
                                <hr />
                                <div class="product" key={product.id}>
                                    <div class="product-image">
                                        <img src={product.img} alt="img"></img>
                                    </div>
                                    <div class="product-details">
                                        <div class="product-title">{product.name}</div>
                                        <p class="product-description">{product.dsc}</p>
                                    </div>
                                    <div class="product-price">${product.price}</div>
                                    <div class="product-quantity">
                                        <i
                                            className="fa-solid fa-plus"
                                            onClick={() => {
                                                const action = addTocart(product);
                                                dispatch(action);
                                            }}
                                        ></i>
                                        <span>{product.qty}</span>
                                        <i
                                            className="fa-solid fa-minus"
                                            onClick={() => {
                                                const action = reduceAmountCart(product);
                                                dispatch(action);
                                            }}
                                        ></i>
                                    </div>
                                    <div class="product-removal">
                                        <button
                                            class="remove-product"
                                            onClick={() => {
                                                const action = removeFromCart(product);
                                                dispatch(action);
                                            }}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                    <div class="product-line-price">${product.price * product.qty}</div>
                                </div>
                            </div>
                        );
                    })}
                    <hr />
                    <div class="totals">
                        <div class="totals-item">
                            <label>Subtotal</label>
                            <div class="totals-value" id="cart-subtotal">
                                ${totalPrice}
                            </div>
                        </div>
                        <div class="totals-item">
                            <label>Tax (5%)</label>
                            <div class="totals-value" id="cart-tax">
                                {totalPrice / 20}
                            </div>
                        </div>
                        <div class="totals-item">
                            <label>Shipping</label>
                            <div class="totals-value" id="cart-shipping">
                                15.00
                            </div>
                        </div>
                        <div class="totals-item totals-item-total">
                            <label>Total Price</label>
                            <div class="totals-value" id="cart-total">
                                ${Math.floor(totalPrice + 15 + totalPrice / 20)}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="emptyCart">
                    <h2>Oop!! Chưa có sản phẩm</h2>

                    <Link to={MainRoutes.SHOP.path} className="orderNow">
                        Tiếp tục mua sắm
                    </Link>
                </div>
            )}
        </div>
    );
}

export default CartPage;
