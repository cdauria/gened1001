import React from 'react';
import styles from '../components/ProjectCard.module.css';

const ProjectCard = ({ title, name }) => {
    return (
        <div className={styles.projectCard}>
            <h3>{title}</h3>
            <p>{name}</p>
        </div>
    );
};

export default ProjectCard;
