import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubjectList.css';
import { Link } from 'react-router-dom';

const SubjectList = ({ subjects }) => {
  return (
    <ul className={styles.subjectList}>
      {subjects.map((subject) => (
        <li key={subject.id} className={styles.subjectListItem}>
          <Link to={`/subjects/${subject.id}`} className={styles.subjectLink}>
            {subject.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

SubjectList.propTypes = {
  subjects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SubjectList;
