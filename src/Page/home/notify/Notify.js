import './notify.scss';
function Notify() {
    return (
        <div className="notifyWrapper" id="to--notify">
            <div className="notifyGrid">
                <div className="col">
                    <div className="notify-item" data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000">
                        <h2 className="notify-title">Mild Butter</h2>
                        <p className="notify-describ">
                            Patak's Butter Chicken Mild is a creamy tomato and butter flavour curry sauce
                        </p>
                        <span className="notify-number">01</span>
                    </div>
                    <div
                        className="notify-item notify-item-left"
                        data-aos="fade-down"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                    >
                        <h2 className="notify-title">Slices Beef</h2>
                        <p className="notify-describ">Get quality Beef Slices at Tesco. Shop in store or online</p>
                        <span className="notify-number">02</span>
                    </div>
                    <div className="notify-item" data-aos="fade-down" data-aos-delay="700" data-aos-duration="1000">
                        <h2 className="notify-title">Sleek Onion</h2>
                        <p className="notify-describ">
                            Green onions have a sleek linear shape with white or pale-green bulbs and long green tops
                        </p>
                        <span className="notify-number">03</span>
                    </div>
                </div>
                <div className="col">
                    <div className="notify-item" data-aos="fade-down" data-aos-delay="1000" data-aos-duration="1000">
                        <h2 className="notify-title">Fresh Bread</h2>
                        <p className="notify-describ">
                            Homemade bread is more nutritious than your store-bought variety
                        </p>
                        <span className="notify-number">04</span>
                    </div>
                    <div
                        className="notify-item notify-item-right "
                        data-aos="fade-down"
                        data-aos-delay="1200"
                        data-aos-duration="1000"
                    >
                        <h2 className="notify-title">Lettuce Leaf </h2>
                        <p className="notify-describ">
                            It is most often grown as a leaf vegetable, but sometimes for its stem and seeds
                        </p>
                        <span className="notify-number">05</span>
                    </div>
                    <div className="notify-item" data-aos="fade-down" data-aos-delay="1500" data-aos-duration="1000">
                        <h2 className="notify-title">Glow Cheese</h2>
                        <p className="notify-describ">Glowfood. Cheese. Is. Unreal! As a cheese fanatic</p>
                        <span className="notify-number">06</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notify;
