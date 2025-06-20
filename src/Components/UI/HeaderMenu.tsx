import Styles from "./HeaderMenu.module.css";
import { FiSun, FiSettings } from "react-icons/fi"; // Example icons (optional if you're using react-icons)

interface Props {
    AdjustLightButtonClick?: () => void;
    AdjustMaterialButtonClick?: () => void;
}

function HeaderMenu({AdjustLightButtonClick, AdjustMaterialButtonClick}: Props) {
    return (
        <header className={Styles.headerMenu}>
            <button className={Styles.iconButton} title="Adjust Light" onClick={AdjustLightButtonClick}>
                <FiSun size={50} />
            </button>
            <button className={Styles.iconButton} title="Adjust Material" onClick={AdjustMaterialButtonClick}>
                <FiSettings size={50} />
            </button>
        </header>
    );
}

export default HeaderMenu;
