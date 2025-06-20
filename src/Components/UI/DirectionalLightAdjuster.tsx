import Styles from "./DirectionalLightAdjuster.module.css";
import { FiX } from "react-icons/fi";
import { useState } from "react";

interface Props {
    setDirectionalLightUIEnabled: (enabled: boolean) => void;
    SetRotation: (value: number) => void;
    SetElevation: (value: number) => void;
    SetAzimuth: (value: number) => void;
}

function DirectionalLightAdjuster({ setDirectionalLightUIEnabled,SetRotation,SetElevation,SetAzimuth }: Props) {
    const [rotation, setRotation] = useState(0.5);
    const [elevation, setElevation] = useState(0.5);
    const [azimuth, setAzimuth] = useState(0.5);

    return (
        <div className={Styles.adjusterContainer}>
            <button
                className={Styles.closeButton}
                onClick={() => setDirectionalLightUIEnabled(false)}
                title="Close"
            >
                <FiX size={18} />
            </button>

            <div className={Styles.title}>Light Settings</div>

            <div className={Styles.sliderGroup}>
                <label className={Styles.label}>Rotation</label>
                <input
                    className={Styles.slider}
                    type="range"
                    min="-20"
                    max="20"
                    step="0.1"
                    value={rotation}
                    onChange={(e) => {
                        setRotation(parseFloat(e.target.value))
                        SetRotation(parseInt(e.target.value))
                    }}
                />
            </div>

            <div className={Styles.sliderGroup}>
                <label className={Styles.label}>Elevation</label>
                <input
                    className={Styles.slider}
                    type="range"
                    min="0"
                    max="30"
                    step="0.1"
                    value={elevation}
                    onChange={(e) => {
                        setElevation(parseFloat(e.target.value))
                        SetElevation(parseInt(e.target.value))
                    }}
                />
            </div>

            <div className={Styles.sliderGroup}>
                <label className={Styles.label}>Azimut</label>
                <input
                    className={Styles.slider}
                    type="range"
                    min="-20"
                    max="20"
                    step="0.1"
                    value={azimuth}
                    onChange={(e) => {
                        setAzimuth(parseFloat(e.target.value))
                        SetAzimuth(parseInt(e.target.value))
                    }}
                />
            </div>
        </div>
    );
}

export default DirectionalLightAdjuster;
