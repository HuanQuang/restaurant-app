import './home.scss';
import 'react-toastify/dist/ReactToastify.css';
import Slide from './bannerSlide/Banner';
import Header from '../../components/header/Header';
import Delivery from './delivery/Delivery';
import Notify from './notify/Notify';
import Menu from './menu/menu';
import Order from './order/Order';
import BestDeal from './bestDeal/BestDeal';
import Analys from './analys/Analys';
import Feedback from './feedback/Feedback';
import Footer from '../../components/footer/Footer';

function HomePage() {
    return (
        <div className="homePage-wrapper">
            <Slide />
            <Header />
            <Delivery />
            <Notify />
            <Menu />
            <Order />
            <BestDeal />
            <Analys />
            <Feedback />
            <Footer />
        </div>
    );
}

export default HomePage;
