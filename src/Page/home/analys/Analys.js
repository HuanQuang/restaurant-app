import './analys.scss';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
function Analys() {
    return (
        <div className="analysWrapper">
            <div className="logo--analyst">
                <p className="logo--analyst--name">Sandwich</p>
                <h3 className="logo--analyst--price"> $45</h3>
                <div className="logo--analyst--icon">
                    <PlayCircleFilledIcon className="icon" />
                </div>
                <span className="logo--analyst--cycle c0"></span>
                <span className="logo--analyst--cycle c1"></span>
                <span className="logo--analyst--cycle c2"></span>
                <span className="logo--analyst--cycle c3"></span>
            </div>
            <div className="analys__data">
                <div className="analys__data--item">
                    <h3 className="analys__data--item--amount">350+</h3>
                    <span className="analys__data--item--name"> Cups of Coffee</span>
                </div>
                <div className="analys__data--item">
                    <h3 className="analys__data--item--amount">2,678+</h3>
                    <span className="analys__data--item--name">Orders Everyday</span>
                </div>
                <div className="analys__data--item">
                    <h3 className="analys__data--item--amount">60</h3>
                    <span className="analys__data--item--name">Skilled Professionals</span>
                </div>
                <div className="analys__data--item">
                    <h3 className="analys__data--item--amount">30 </h3>
                    <span className="analys__data--item--name">Sandwichs at Hour</span>
                </div>
            </div>
        </div>
    );
}

export default Analys;
