import React from 'react';
// import PropTypes from 'prop-types';
// import {useLocation} from 'react-router-dom';
import styles from './OptionsList.css';
import { Link } from 'react-router-dom';


const OptionsList = () => {
  let options = [
    {
      "id": 1,
      "name": "Lecture Notes"
    },
    {
      "id": 2,
      "name": "Links"
    }
  ]
  // return
  // const location = useLocation()
  // const { options} = location.state;
  // console.log(options);

// const OptionsList = ({ options }) => {

  return (
    <>
    <ul className={styles.optionsList}>
      {options.map((option) => (
        <li key={option.id} className={styles.optionItem}>
          <Link to={`/materials/${option.id}`} className={styles.optionLink}>
            {option.name}
          </Link>
        </li>
      ))}
      <Link to={`/materials/add`} className={styles.addButton}>Add material</Link>
    </ul>
    </>
  );
};

// OptionsList.propTypes = {
//   options: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default OptionsList;
