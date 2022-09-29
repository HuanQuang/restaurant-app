import ListIcon from '@mui/icons-material/List';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { createContext, useState } from 'react';
import Product from '../../API/GetAPI';
import { PopularCakes } from '../../assets/Shop/Image';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './shop.scss';
export const Result = createContext();

function ShopPage() {
    const [name, setName] = useState('best-foods');
    const [search, setSearch] = useState('');
    const [rangePrice, setRangePrice] = useState();
    const [styleList, setStyleList] = useState();
    // Chọn hiển thị sản phẩm theo danh sách hoặc khối
    const handleStyleList = (e) => {
        const node = Number(e.target.closest('.category__product--sort').dataset.index);
        setStyleList(node === 1 ? 'product-active' : '');
    };
    // call api hiển thị theo danh mục sản phẩm
    const handleCallApi = (e) => {
        const node = e.target.closest('li').dataset.index;
        const nodeList = document.querySelectorAll('.category__popular--classify');
        nodeList.forEach((item) => item.classList.remove('clickActive'));
        e.target.closest('li').classList.add('clickActive');
        setName(node);
    };
    // xử lí hàm tìm kiếm theo tên sản phẩm
    const handleSearch = (e) => {
        setSearch(e.target.value.trim());
    };
    // xử lí hàm sắp xếp theo giá sản phẩm
    const handlePrice = (e) => {
        let node = e.target.dataset.index;
        document.querySelectorAll('.category__price--btn').forEach((item) => {
            if (item.dataset.index !== node) {
                item.checked = false;
            }
        });
        setRangePrice(node);
    };
    return (
        <div className="shop--wrapper">
            <div className="banner--shop"></div>;
            <Header />
            <Result.Provider value={[search, rangePrice, styleList]}>
                <div className="category--wrapper">
                    <div className="grid wide">
                        <div className="row">
                            <div className="col col-2 c-0">
                                <ul className="category__popular">
                                    <h2>Popular</h2>
                                    {PopularCakes.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                data-index={item.name}
                                                className="category__popular--classify"
                                                onClick={handleCallApi}
                                            >
                                                <img src={item.src} alt="img"></img>
                                                <span>{item.name}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <ul className="category__price">
                                    <h2>Price</h2>
                                    <label>
                                        <input
                                            className="category__price--btn"
                                            type="radio"
                                            onInput={handlePrice}
                                            data-index={0}
                                        ></input>
                                        <span> Under $50</span>
                                    </label>
                                    <label>
                                        <input
                                            className="category__price--btn"
                                            type="radio"
                                            onInput={handlePrice}
                                            data-index={1}
                                        ></input>
                                        <span>$50 to $100</span>
                                    </label>
                                    <label>
                                        <input
                                            className="category__price--btn"
                                            type="radio"
                                            onInput={handlePrice}
                                            data-index={2}
                                        ></input>
                                        <span> Above $100</span>
                                    </label>
                                </ul>
                                <ul className="category__rate">
                                    <h2>Rate</h2>
                                    <div className="category__rate--star">
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                    </div>
                                    <div className="category__rate--star">
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarBorderIcon />
                                    </div>
                                    <div className="category__rate--star">
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarBorderIcon />
                                        <StarBorderIcon />
                                    </div>
                                </ul>
                            </div>
                            <div className="col col-10">
                                <div className="category__product--header">
                                    <div className="category__product--header--search">
                                        <input placeholder="Search your product" onChange={handleSearch}></input>
                                        <div className="search--btn">
                                            <SearchIcon sx={{ borderRadius: 4 }} />
                                        </div>
                                    </div>
                                    <div
                                        className="category__product--sort c-0"
                                        onClick={handleStyleList}
                                        data-index={1}
                                    >
                                        <ListIcon sx={{ fontSize: 35, color: '#686262' }} />
                                    </div>
                                    <div
                                        className="category__product--sort c-0"
                                        onClick={handleStyleList}
                                        data-index={0}
                                    >
                                        <WidgetsIcon sx={{ fontSize: 35, color: '#ad3304' }} />
                                    </div>
                                </div>
                                <div className=" category__product--list">
                                    <Product props={name} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Result.Provider>
            <Footer />
        </div>
    );
}

export default ShopPage;
