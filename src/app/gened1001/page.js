'use client'

import React, { useState, useEffect } from 'react';
import ProjectCard from '../../components/projectCard'
import styles from '../../components/projectCard.module.css'

const HomePage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('/api/airtable'); // Make sure this matches your API endpoint
          if (response.ok) {
            const data = await response.json();
            setProjects(data.result); // This should match the structure you're sending from the API
          } else {
            console.error('Error fetching data:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      fetchData();
    }, []);

    return (
  <div className={styles.gridContainer}>
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.options[0]} name={project.options[1]} />
        ))}
      </div>
    );
};

export default HomePage;