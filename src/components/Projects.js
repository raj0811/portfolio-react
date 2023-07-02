import { Link } from 'react-router-dom';
import styles from '../styles/Project.module.css'
import { projects } from '../data/projects';
import { frontend } from '../data/frontend';

const Projects = () => {
    return (
        <div className={styles.project}>
            <div className={styles.pmain}>

                <h1 className={styles.center}> Backend Projects</h1>

                <div className={styles.pctn}>

                    {projects.map((project, index) => (
                        <div className={styles.projectbox}>
                            <h3>{project.name}</h3>
                            <div className={styles.projectimg} style={{ backgroundImage: project.background, backgroundSize: '100% 100%' }}>

                            </div>
                            <div className={styles.data}>

                                <span>{project.desc}</span>
                                <div className={styles.stack}>
                                    {project.tech.map((tech, techIndex) => (
                                        <span key={techIndex}> {tech} </span>
                                    ))}
                                </div>


                            </div>
                            <div className={styles.btndiv}>
                                <a target={'_blank'} href={project.git}>Git hub</a>
                                {project.live !== '' && <a href={project.live}>View</a>}
                            </div>


                        </div>


                    ))}
                        <h1 className={styles.center}>Frontend Projects</h1>
                    <div className={styles.pctn}>

                        {frontend.map((project, index) => (
                            <div className={styles.projectbox}>
                                <h3>{project.name}</h3>
                                <div className={styles.projectimg} style={{ backgroundImage: project.background, backgroundSize: '100% 100%' }}>

                                </div>
                                <div className={styles.data}>

                                    <span>{project.desc}</span>
                                    <div className={styles.stack}>
                                        {project.tech.map((tech, techIndex) => (
                                            <span key={techIndex}> {tech} </span>
                                        ))}
                                    </div>


                                </div>
                                <div className={styles.btndiv}>
                                <a target={'_blank'} href={project.git}>Git hub</a>
                                {project.live !== '' && <a href={project.live}>View</a>}
                            </div>


                            </div>
                        ))}

                    </div>

                </div>


            </div>
            
        </div>
    );
};

export default Projects;
