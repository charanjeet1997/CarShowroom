import Styles from "./HeaderMenu.module.css";
import { FiSun, FiSettings } from "react-icons/fi";
import {TbAugmentedReality} from "react-icons/tb";
import {useEffect, useState} from "react";
import {createXRStore} from "@react-three/xr"; // Example icons (optional if you're using react-icons)

interface Props {
    AdjustLightButtonClick?: () => void;
    AdjustMaterialButtonClick?: () => void;
}

function HeaderMenu({AdjustLightButtonClick, AdjustMaterialButtonClick}: Props) {
    const isARSupported = IsARSupported();
    const store = createXRStore();
    return (
        <header className={Styles.headerMenu}>
            <button className={Styles.iconButton} title="Adjust Light" onClick={AdjustLightButtonClick}>
                <FiSun size={50} />
            </button>
            <button className={Styles.iconButton} title="Adjust Material" onClick={AdjustMaterialButtonClick}>
                <FiSettings size={50} />
            </button>
            {isARSupported && <button className={Styles.iconButton} title="AR" onClick={()=>store.enterAR()}>
                <TbAugmentedReality size={100}/>
            </button>}
        </header>
    );
}


function IsARSupported() {
    const [isSupported, setIsSupported] = useState<boolean | null>(null);

    useEffect(() => {
        if (navigator.xr && navigator.xr.isSessionSupported) {
            navigator.xr.isSessionSupported('immersive-ar').then((supported) => {
                setIsSupported(supported);
            });
        } else {
            setIsSupported(false);
        }
    }, []);

    return isSupported;
}

export default HeaderMenu;
