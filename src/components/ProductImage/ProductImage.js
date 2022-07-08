import styles from '../Product/Product.module.scss';
import PropTypes from 'prop-types';


const ProductImage = props => {
  return (
    <div className={styles.imageContainer}>
      <img 
        className={styles.image}
        alt={props.title}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`} />
    </div>
  )
}

ProductImage.propTypes = {
  name: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
};

export default ProductImage; 