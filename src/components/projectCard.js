import React from 'react';
import styles from '../components/projectCard.module.css';

const ProjectCard = ({ title, name }) => {
    return (
        <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>{title}</h3>
            <p className={styles.projectName}>{name}</p>
        </div>
    );
};

export default ProjectCard;