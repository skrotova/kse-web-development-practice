import React from 'react';
import PropTypes from 'prop-types';
import styles from './OptionsList.css';
import { Link } from 'react-router-dom';

const OptionsList = ({ options }) => {
  return (
    <ul className={styles.optionsList}>
      {options.map((option) => (
        <li key={option.id} className={styles.optionItem}>
          <Link to={`/materials/${option.id}`} className={styles.optionLink}>
            {option.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

OptionsList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default OptionsList;
