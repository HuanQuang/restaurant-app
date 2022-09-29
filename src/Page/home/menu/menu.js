import MainRoutes from '../../../routes/Routes';
import Button from '../../../components/button/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { ListName } from '../../../assets/Home/Image';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import 'swiper/css';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import './menu.scss';
function Menu() {
    return (
        <div className="menuWrapper">
            <p className="menu--title">Best food</p>
            <h2 className=" menu--subtitle">
                Super delicious Steak <span style={{ color: 'red' }}> Hamburger</span>
            </h2>
            <h1 className="price">$25.00</h1>
            <Button to={MainRoutes.SHOP.path}>Order Now</Button>
            <div className="category-food">
                <p className="menu--title">What we have?</p>
                <h2 className="category-list">Browse food category</h2>
                <Swiper
                    slidesPerView={7}
                    spaceBetween={30}
                    loop={true}
                    modules={[Navigation, Autoplay]}
                    loopFillGroupWithBlank={true}
                    autoplay={{
                        delay: 1800,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: '.next-btn',
                        prevEl: '.prev-btn',
                    }}
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        840: {
                            slidesPerView: 7,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {ListName.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className="item">
                                <img className="img" src={item.url} alt="img"></img>
                                <p>{item.name}</p>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <button className="btn prev-btn">
                    <DoubleArrowIcon style={{ transform: 'rotate(180deg)' }} />
                </button>
                <button className="btn next-btn">
                    <DoubleArrowIcon />
                </button>
            </div>
        </div>
    );
}

export default Menu;
