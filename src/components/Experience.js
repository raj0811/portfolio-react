import styles from '../styles/Experience.module.css'

const Experience = () => {
    return (
        <div className={styles.exp} >
            <div className={styles.body}>
                <h1>My Experiences</h1>
                <div className={styles.internship}>
                    <div className={styles.text}>
                        <h1 className={styles.mrgin} >Nodejs Developer Intern <span>(02/04/2023 – 01/07/2023)</span> </h1>
                        <h2 className={styles.mrgin} >MagicStep Solution Ltd.</h2>
                        <ul className={styles.work}>
                            <li> Worked as a Node.js developer intern on Backend API.</li>
                            <li> Collaborated with a team on various projects.</li>
                            <li> Tasked with making necessary changes to the backend API.</li>
                            <li> Implemented new features  According to need</li>
                            <li> Worked extensively with MongoDB for API development</li>
                        </ul>
                    </div>
                    <div className={styles.logo}>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Experience