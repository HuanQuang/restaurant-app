import './error.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import MainRoutes from '../../routes/Routes';
function Error() {
    return (
        <div className="error-direct">
            <Link className="error-direct--button" to={MainRoutes.SHOP.path}>
                <Button variant="outlined" startIcon={<ArrowBackIcon />}>
                    Back to Shop
                </Button>
            </Link>
        </div>
    );
}

export default Error;
