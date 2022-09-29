import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { UserFeedback } from '../../../assets/Home/Image';
import './feedback.scss';
function Feedback() {
    return (
        <div className="feedbackWrapper">
            <Swiper
                slidesPerView={1}
                loop={true}
                modules={[Pagination, Autoplay]}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                style={{ padding: '30px 0' }}
            >
                {UserFeedback.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className="feedback--item">
                            <div className="feedback--item--user">
                                <img src={item.avatar} alt="img"></img>
                            </div>
                            <div className="user-feedback">{item.name}</div>
                            <p className="user-feedback--infor">{item.organization}</p>
                            <p className="this--feedback">{item.feedback}</p>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default Feedback;
