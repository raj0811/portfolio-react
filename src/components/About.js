import React from 'react';
import styles from '../styles/About.module.css';
import { skills } from '../data/skills'

const About = () => {
    return (
        <div className={styles.main}>
            <div className={styles.body}>
                <div className={styles.upper}>
                    <div className={styles.text}>
                        <div className={styles.me}>
                            <h1>About Me</h1>
                            <div className={styles.logo}></div>
                        </div>
                        <br />
                        <div className={styles.medata}>
                            <h2>Hi Everyone, I am Raj Barmaiya from Madhya Pradesh</h2>
                            <h3>Apart from coding, some other activities that I love to do!</h3>
                            <ul>
                                <li>Traveling</li>
                                <li>Listening Music</li>
                                <li>Watching Movies</li>
                            </ul>

                        </div>
                    </div>

                    <div className={styles.image}></div>
                </div>

                <div className={styles.lower}>
                    <div className={styles.proff}>
                        <h1 className={styles.hhead} >Professional Skills</h1>


                        <div className={styles.skillctn}>

                            {skills.map((skill, index) => (
                                <div className={styles.skillsbox}>
                                    <div className={styles.skillimg} style={{ backgroundImage: skill.background, backgroundSize: '100% 100%' }}>

                                    </div>
                                    <span>{skill.name}</span>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className={styles.contact}>
                        <h1 className={styles.hhead} >Social Media</h1>
                        <div className={styles.social}>
                            <div className={styles.sbox}>
                                <a target={'_blank'} href='https://www.linkedin.com/in/raj-barmaiya-40885221b/'>
                                 <img src='https://cdn-icons-png.flaticon.com/128/2504/2504923.png' alt='icon' />
                                </a>
                            </div>

                            <div className={styles.sbox}>
                                <a target={'_blank'} href='https://github.com/raj0811'>
                                 <img src='https://cdn-icons-png.flaticon.com/128/733/733609.png' alt='icon' />
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
