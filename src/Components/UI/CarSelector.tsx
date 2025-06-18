import Styles from './CarSelector.module.css';
import { type CarData, CarDataHandler } from "../../Data/CarData.ts";

interface Props {
    handler: CarDataHandler;
    OnClick?: (carID: number) => void;
    onBack?: (uiID: number) => void; // <-- Added Back button handler
}

function CarSelector({ handler, OnClick, onBack }: Props) {
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
            {handler.data.map((data: CarData) => (
                <button
                    key={data.id}
                    className={Styles['carButton']}
                    onClick={() => OnClick?.(data.id)}
                >
                    {data.name}
                </button>
            ))}
        </footer>
    );
}

export default CarSelector;
