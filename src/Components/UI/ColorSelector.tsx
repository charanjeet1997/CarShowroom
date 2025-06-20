import Styles from './ColorSelector.module.css';
import type { ColorData } from "../../Data/Data.ts";
import type { Color } from "three";

interface Props {
    OnClick?: (color: Color) => void;
    onBack?: (uiID: number) => void;
    colorData: ColorData[];
}

function ColorSelector({ OnClick, onBack, colorData }: Props) {
    const backButtonSize = "25";
    return (
        <div className={Styles.colorMenu}>
            <button className={Styles.backButton} onClick={() => onBack?.(0)} title="Back">
                <svg width={backButtonSize} height={backButtonSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </button>

            {colorData.map((data: ColorData) => (
                <button
                    key={data.name}
                    className={Styles.colorButton}
                    onClick={() => OnClick?.(data.color)}
                    title={data.name}
                >
                    <span
                        className={Styles.colorSwatch}
                        style={{
                            background: `rgb(${data.color.r * 255}, ${data.color.g * 255}, ${data.color.b * 255})`
                        }}
                    />
                </button>
            ))}
        </div>
    );
}

export default ColorSelector;
