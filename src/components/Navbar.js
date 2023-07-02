import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.bar}>
                <h1 className={styles.home}>
                    <Link to={'/'}>Raj</Link>
                </h1>

                <div className={styles.links}>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/project'>Projects</Link>
                <Link to='/experience'>Experience</Link>
                <a target={'_blank'} href='https://drive.google.com/file/d/1aCPJGpV4pYVsliQzperrW42gBrQj27uK/view?usp=sharing'
                >Resume</a>
                
                
                <a href='https://github.com/raj0811'  className={styles.git}>
                <img src='https://cdn-icons-png.flaticon.com/128/2504/2504911.png'
                        alt='git' />
                </a>
            </div>
            </div>

            
        </div>
    );
};

export default Navbar;
