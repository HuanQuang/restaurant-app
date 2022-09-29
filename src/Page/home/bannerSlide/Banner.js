import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { BannerImg } from '../../../assets/Home/Image';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MainRoutes from '../../../routes/Routes';
import Button from '../../../components/button/Button';
import './banner.scss';

function Slide() {
    return (
        <div className="banner-wrapper">
            <Swiper
                slidesPerView={1}
                loop={true}
                modules={[Pagination, Autoplay]}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
            >
                {BannerImg.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className="banner-item">
                            <div className="banner-item--img">
                                <img src={item.src} alt="img"></img>
                            </div>
                            <div className="content">
                                <p className="description" data-aos="fade-right" data-aos-duration="2000">
                                    {item.des}
                                </p>
                                <div className="button">
                                    <Button to={MainRoutes.SHOP.path}>
                                        <AddShoppingCartIcon sx={{ marginRight: 1, transform: 'translateY(6px)' }} />
                                        Order Now
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
export default Slide;
