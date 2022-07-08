import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {
  Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    basePrice: PropTypes.number.isRequired,
    color: PropTypes.array.isRequired,
    sizes: PropTypes.array.isRequired
  };

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(props.basePrice);
  const [additionalPrice, setAdditionalPrice] = useState('');


  const getPrice = (price) => {
    return setAdditionalPrice(price);
  };
  useMemo(() => {  
    return setCurrentPrice(props.basePrice + additionalPrice);
  }, [props.basePrice, additionalPrice]);

  const prepareSummary = props => {
    return console.log(
        'SUMMARY\n',
        '=======\n',
        'NAME: ',props.title, '\n',
        'PRICE: ',currentPrice, '\n',
        'SIZE: ', currentSize, '\n',
        'COLOR: ', currentColor, '\n',
        )
    }


  return (
    <article className={styles.product}>
      <ProductImage name={props.name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {currentPrice}$</span>
        </header>
        <ProductForm currentSize={currentSize} setCurrentSize={setCurrentSize} getPrice={getPrice} sizes={props.sizes} currentColor={currentColor} setCurrentColor={setCurrentColor} color={props.colors} prepareSummary={prepareSummary} title={props.title} currentPrice={currentPrice} setCurrentPrice={setCurrentPrice} />
      </div>
    </article>
  )
};

export default Product;