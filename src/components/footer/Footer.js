import './footer.scss';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
    return (
        <footer className="footerWrapper">
            <div className="infomation">
                <div className="bussiness__hour">
                    <div className="bussiness__hour--day">
                        <span>Sunday</span>
                        <span>Monday</span>
                        <span>Tuesday</span>
                        <span>Wednesday</span>
                        <span>Friday</span>
                        <span>Saturday</span>
                    </div>
                    <div>
                        <span>...</span>
                        <span>...</span>
                        <span>...</span>
                        <span>...</span>
                        <span>...</span>
                        <span>...</span>
                    </div>
                    <div className="status">
                        <span>Closed</span>
                        <span>08.00-20.00</span>
                        <span>10.00-17.00</span>
                        <span>12.00-21.00</span>
                        <span>07.00-13.00</span>
                        <span>09.00-12.00</span>
                    </div>
                </div>
                <div className="contact">
                    <h2 className="contact__title">Address</h2>
                    <div className="contact--phone text">
                        <PhoneInTalkIcon />
                        +449 888 666 0000
                    </div>
                    <div className="gmail text">
                        <EmailIcon />
                        foodg@gmail.com
                    </div>
                    <div className="address text">
                        <BusinessIcon />
                        855 Hoi An, Viet Nam
                    </div>
                    <div className="social">
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                        <YouTubeIcon />
                    </div>
                </div>
            </div>
            <div className="map"></div>
        </footer>
    );
}

export default Footer;
