import { useState } from "react";
import { FiX } from "react-icons/fi";
import Styles from "./MaterialValueAdjuster.module.css";

interface Props{
    setMaterialUIEnabled: (isMaterialUIEnabled: boolean) => void;
    SetRoughness:(value:number) => void;
    SetMetalness:(value:number) => void;
}


function MaterialValueAdjuster({setMaterialUIEnabled,SetRoughness,SetMetalness}: Props) {
    const [roughness, setRoughness] = useState(0.5);
    const [metallic, setMetallic] = useState(0.5);
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className={Styles.adjusterContainer}>
            <button className={Styles.closeButton} onClick={() => {
                setMaterialUIEnabled(false);
                setVisible(false)
            }} title="Close">
                <FiX size={16} />
            </button>
            <div className={Styles.title}>Material Settings</div>
            <div className={Styles.sliderGroup}>
                <label className={Styles.label}>Roughness: {roughness.toFixed(2)}</label>
                <input
                    className={Styles.slider}
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={roughness}
                    onChange={(e) => {
                        setRoughness(parseFloat(e.target.value))
                        SetRoughness(parseFloat(e.target.value))
                    }}
                />
            </div>

            <div className={Styles.sliderGroup}>
                <label className={Styles.label}>Metallic: {metallic.toFixed(2)}</label>
                <input
                    className={Styles.slider}
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={metallic}
                    onChange={(e) => {
                        setMetallic(parseFloat(e.target.value))
                        SetMetalness(parseFloat(e.target.value))
                    }}
                />
            </div>

        </div>
    );
}

export default MaterialValueAdjuster;
