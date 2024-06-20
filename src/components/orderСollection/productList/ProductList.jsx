
import PropTypes from 'prop-types';
import './styles.css';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-item">
                    <h3>{product.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
                </div>
            ))}
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ProductList;
