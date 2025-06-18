import Styles from './ColorSelector.module.css';
import ColorData from "../../Data/ColorData.ts";
import type {Color} from "three";

interface Props {
    OnClick?: (color: Color) => void;
    onBack?: (uiID: number) => void; // <-- Added Back button handler
}

function ColorSelector({ OnClick, onBack }: Props) {
    return (
        <footer className={Styles['carMenu']}>
            {/* Back Button */}
            <button className={Styles['backButton']} onClick={()=>{
                if(onBack)
                    onBack(0);
            }}>
            ⬅ Back
            </button>

            {/* Car Selection Buttons */}

            {Object.entries(ColorData).map(([key, value]) => (
                <button
                    key={key}
                    className={Styles['carButton']}
                    onClick={() => OnClick?.(value)}
                >
                    {key}
                </button>
            ))}
        </footer>
    );
}

export default ColorSelector;
