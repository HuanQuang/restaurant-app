import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { DealImg } from '../../../assets/Home/Image';
import './bestDeal.scss';
function BestDeal() {
    return (
        <div className="dealWrapper">
            <h3 className="name-ssDeal">Quality Products</h3>
            <p className="deal--describe">
                Burger as expected <span style={{ color: 'red' }}>dilicious</span> one
            </p>
            <div className="deal--products">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={55}
                    loop={true}
                    modules={[Pagination, Autoplay]}
                    loopFillGroupWithBlank={true}
                    slidesPerGroup={4}
                    speed={700}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    style={{ paddingLeft: '7px' }}
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 60,
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 55,
                        },
                        740: {
                            slidesPerView: 4,
                            spaceBetween: 55,
                        },
                    }}
                >
                    {DealImg.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className="deal--product--item">
                                <div className="img--wrap">
                                    <img src={item.src} alt="img"></img>
                                    <div className="animate">
                                        BEST DEAL
                                        <div className="animate--active"> BEST DEAL</div>
                                    </div>
                                </div>
                                <div className="infor">
                                    <h3 className="cakeName">{item.name}</h3>
                                    <p className="cake__Description">
                                        Buarning do amet contur dicivt suia non nuameius velit
                                    </p>
                                    <div className="cake__price">{item.price}</div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}

export default BestDeal;
