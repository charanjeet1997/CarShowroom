import Styles from './ColorSelector.module.css';
import type {ColorData} from "../../Data/Data.ts";
import type { Color } from "three";

interface Props {
    OnClick?: (color: Color) => void;
    onBack?: (uiID: number) => void;
    colorData: ColorData[];
}

function ColorSelector({ OnClick, onBack ,colorData}: Props) {
    return (
        <>
            <button className={Styles.backButton} onClick={() => onBack?.(0)}>
                ← Back
            </button>

            <div className={Styles.colorMenu}>
                {colorData.map((data: ColorData) => (
                    <button
                        key={data.name}
                        className={Styles.colorButton}
                        onClick={() => OnClick?.(data.color)}
                        title={data.name} // hover shows the name
                    >
                        <span
                            className={Styles.colorSwatch}
                            style={{ background: `rgb(${data.color.r * 255}, ${data.color.g * 255}, ${data.color.b * 255})` }}
                        />
                    </button>
                ))}
            </div>
        </>
    );
}

export default ColorSelector;
