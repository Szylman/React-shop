import styles from '../Product/Product.module.scss';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const prepareSummary = props => {
  return console.log(
      'SUMMARY\n',
      '=======\n',
      'NAME: ',props.title, '\n',
      'PRICE: ',props.currentPrice, '\n',
      'SIZE: ', props.currentSize, '\n',
      'COLOR: ', props.currentColor, '\n',
      )
  }

const ProductForm = props => {
  return (
    <form>
      <OptionSize currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} getPrice={props.getPrice} sizes={props.sizes} />
      <OptionColor currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} color={props.color} />
      <Button className={styles.button} 
      onClick={(e) => {
        e.preventDefault();
        prepareSummary(props)
      }}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  )
}

ProductForm.propTypes = {
  title: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
  color: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default ProductForm; 