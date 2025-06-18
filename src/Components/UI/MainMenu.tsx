import Styles from './MainMenu.module.css';

interface Props {
    onUIClick: (index: number) => void;
    autoRotate: boolean;
    OnAutoRotate: (autoRotate: boolean) => void;
}

function MainMenu({onUIClick,OnAutoRotate,autoRotate}: Props) {
    return (
        <footer className={Styles.menuContainer}>
            <button className={Styles.menuButton} onClick={() => {
                onUIClick(2)
            }}>🎨 Color</button>
            <button className={Styles.menuButton} onClick={() => {
                onUIClick(1)
            }}>🚗 Car</button>
            <button className={Styles.menuButton} onClick={() => {
                OnAutoRotate(!autoRotate)
            }}>🔁 Auto Rotate</button>
            <button className={Styles.menuButton} onClick={() => {

            }}>⬇️ Download</button>
        </footer>
    );
}

export default MainMenu;
