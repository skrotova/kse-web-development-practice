import React, { useState } from 'react';
import styles from './AddMaterialPage.css';

const AddMaterialPage = ({ onAddMaterial }) => {
  const [fileLink, setFileLink] = useState('');
  const [externalLink, setExternalLink] = useState('');
  const [file, setFile] = useState(null);
  const [compendium, setCompendium] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMaterial({ fileLink, externalLink, file, compendium });
    setFileLink('');
    setExternalLink('');
    setFile(null);
    setCompendium('');
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className={styles.addMaterialPage}>
      <h1>New Information</h1>
      <form onSubmit={handleSubmit} className={styles.addMaterialForm}>
        <div className={styles.formGroup}>
          <label htmlFor="externalLink" className={styles.formLabel}>Add a link to useful material</label>
          <input
            type="text"
            id="externalLink"
            placeholder="Put a link"
            value={externalLink}
            onChange={(e) => setExternalLink(e.target.value)}
            required
            className={styles.formInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="file" className={styles.formLabel}>Upload a file</label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className={styles.formInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="compendium" className={styles.formLabel}>Write a compendium manually</label>
          <textarea
            id="compendium"
            placeholder="Write here..."
            value={compendium}
            onChange={(e) => setCompendium(e.target.value)}
            className={styles.formTextarea}
          />
        </div>
        <button type="submit" className={styles.submitButton}>Add</button>
      </form>
    </div>
  );
};

export default AddMaterialPage;
