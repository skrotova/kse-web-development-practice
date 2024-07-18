import React from 'react';
import PropTypes from 'prop-types';
import './OptionsList.css';
import { Link } from 'react-router-dom';

const OptionsList = ({ options }) => {
  return (
    <ul className="options-list">
      {options.map((option) => (
        <li key={option.id}>
          <Link to={`/materials/${option.id}`} className="option-link">
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
