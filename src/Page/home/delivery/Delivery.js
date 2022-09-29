import './delivery.scss';
import Image from '../../../assets/Home/Image';
function Delivery() {
    return (
        <div className="deliveryWrapper" id="to--delivery">
            <p className="title" data-aos="zoom-out-right" data-aos-duration="1000">
                Order Now!!!
            </p>
            <h2 className="sub-title" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="500">
                How it work??
            </h2>
            <div className="">
                <div className="row">
                    <div className="item" data-aos="zoom-out" data-aos-duration="1000">
                        <img src={Image.step1} alt="img"></img>
                        <span className="step">Step 1</span>
                        <p className="content">Choose Your Favorite</p>
                    </div>
                    <div className="item" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="500">
                        <img src={Image.step2} alt="img"></img>
                        <span className="step">Step 2</span>
                        <p className="content">We Deliver Your Meals</p>
                    </div>
                </div>
                <div className="row">
                    <div className="item" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="1000">
                        <img src={Image.step3} alt="img"></img>
                        <span className="step">Step 3</span>
                        <p className="content">Cash on Delivery</p>
                    </div>
                    <div className="item" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="1500">
                        <img src={Image.step4} alt="img"></img>
                        <span className="step">Step 4</span>
                        <p className="content">Eat And Enjoy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Delivery;
