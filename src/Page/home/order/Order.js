import './order.scss';
import Image from '../../../assets/Home/Image';
import Button from '../../../components/button/Button';
import MainRoutes from '../../../routes/Routes';
function Order() {
    return (
        <div className="order-wrapper" id="to--branch">
            <div className="order-content">
                <h2 className="name--section">Delivery</h2>
                <h2>
                    A Moments Of Delivered <span>On Right Time & Place</span>
                </h2>
                <p>
                    Coffee Log is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon's
                    Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a
                    bustling London inteon.
                </p>
                <div className="order-contact">
                    <img src={Image.delivery} alt="img"></img>
                    <div>
                        <h3>Delivery Order Number</h3>
                        <h3 className="phone">123-59794069</h3>
                    </div>
                    <div className="button">
                        <Button to={MainRoutes.SHOP.path}>Order</Button>
                    </div>
                </div>
            </div>
            <div className="order-img">
                <img src={Image.bigDelivery} alt="img"></img>
            </div>
        </div>
    );
}

export default Order;
