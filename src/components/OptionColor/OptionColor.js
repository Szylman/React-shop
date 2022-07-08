import styles from '../Product/Product.module.scss'
import clsx from 'clsx';
import PropTypes from 'prop-types';

const prepareColorClassName = color => {
  return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
};

const OptionColor = props => {
  return (
    <div className={styles.colors}>
    <h3 className={styles.optionLabel}>Colors</h3>
    <ul className={styles.choices}>
     {props.color.map((item) => 
        <li key={item}>
          <button type="button" onClick={() => props.setCurrentColor(item)} className={clsx(prepareColorClassName(item), item === props.currentColor && styles.active)} />
        </li> 
      )}
    </ul>
  </div>
  );
};

OptionColor.propTypes = {
  currentColor: PropTypes.string.isRequired,
};

export default OptionColor