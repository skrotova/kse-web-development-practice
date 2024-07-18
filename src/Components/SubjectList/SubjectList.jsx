import React from 'react';
import PropTypes from 'prop-types';
import './SubjectList.css';
import { Link } from 'react-router-dom';

const SubjectList = ({ subjects }) => {
  return (
    <ul className="subject-list">
      {subjects.map((subject) => (
        <li key={subject.id}>
          <Link to={`/subjects/${subject.id}`} className="subject-link">
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
