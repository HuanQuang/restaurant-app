import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { ToastContainer, toast } from 'react-toastify';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Fragment, useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { addTocart } from '../../../Features/CartSlice';
import { Result } from '../../shop/Shop';
import './pagination.scss';
function Pagination(props) {
    const resual = useContext(Result);
    const { data } = props;
    const notify = () => {
        toast.success('Thêm sản phẩm thành công!', {
            position: toast.POSITION.TOP_RIGHT,
        });
    };
    const messageLogin = () => {
        toast.error('Bạn cần đăng nhập trước!!', {
            position: toast.POSITION.TOP_RIGHT,
        });
    };
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [search, rangePrice, styleList] = resual;
    const itemsPerPage = 24;
    const dispatch = useDispatch();
    useEffect(() => {
        // tính toán số trang được hiển thị
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };
    // Lọc theo giá sản phẩm
    const newList = currentItems.filter((item) => {
        switch (Number(rangePrice)) {
            case 0:
                if (item.price < 50) {
                    return item;
                }
                break;
            case 1:
                if (50 <= item.price && item.price <= 100) {
                    return item;
                }
                break;
            case 2:
                if (item.price >= 100) {
                    return item;
                }
                break;
            default:
        }
    });
    const renderList = rangePrice === undefined ? currentItems : newList;
    return renderList.length !== 0 ? (
        <Fragment>
            <div className={`product--item ${styleList}`}>
                {renderList.map((item) => {
                    // xử lí thông tin tìm kiếm tên sản phẩm
                    if (!item.name.toLowerCase().includes(search)) {
                        item.display = 'none';
                    } else {
                        item.display = '';
                    }

                    return (
                        <>
                            <Link
                                to={`/shop/${item.id}`}
                                className="item"
                                key={item.id}
                                style={{ display: item.display }}
                                data-index={item.id}
                            >
                                <div className="product__img">
                                    <img src={item.img} alt="img"></img>
                                    <div className="product__img--rate">
                                        <StarRateIcon sx={{ fontSize: 30 }} />
                                        <span>{item.rate}</span>
                                    </div>
                                    <div className="product__img--cart">
                                        <FavoriteBorderIcon
                                            sx={{
                                                padding: '4px',
                                                background: '#00000087',
                                                borderRadius: '50%',
                                                marginBottom: '5px',
                                                ':hover': { color: '#ff514e' },
                                            }}
                                        />
                                        <AddShoppingCartIcon
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (localStorage.getItem('user')) {
                                                    dispatch(addTocart(item));
                                                    notify();
                                                } else {
                                                    messageLogin();
                                                }
                                            }}
                                            sx={{
                                                padding: '4px',
                                                background: '#00000087',
                                                borderRadius: '50%',
                                                ':hover': { color: '#ff514e' },
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="product__content">
                                    <h2 className="product__content--name">{item.name}</h2>
                                    <p className="product__content--des">{item.dsc}</p>
                                    <div className="product__content--other">
                                        <div className="product__content--other--position">
                                            <FmdGoodIcon sx={{ marginRight: 1, fontSize: 17, color: '#ff514e' }} />
                                            <span className="product--location">{item.country}</span>
                                        </div>
                                        <div className="product--price">${item.price}</div>
                                    </div>
                                </div>
                            </Link>
                            <Outlet />
                        </>
                    );
                })}
            </div>
            <div className="parent-active"></div>
            <ReactPaginate
                containerClassName={'pagination'}
                previousLabel={'<'}
                previousClassName={'pre'}
                nextClassName={'next'}
                nextLabel={'>'}
                marginPagesDisplayed={0}
                breakLabel={''}
                pageCount={pageCount}
                pageRangeDisplayed={5}
                pageClassName={'pageNumber'}
                onPageChange={handlePageClick}
            />
            <ToastContainer autoClose={2000} pauseOnFocusLoss={false} />
        </Fragment>
    ) : (
        <div className="emptyProduct">Không có sản phẩm phù hợp</div>
    );
}

export default Pagination;
