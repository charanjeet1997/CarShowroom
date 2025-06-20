import Styles from './CarSelector.module.css';
import { type CarData, CarDataHandler } from "../../Data/CarData.ts";
import { useState } from "react";

interface Props {
    handler: CarDataHandler;
    OnClick?: (carID: number) => void;
    onBack?: (uiID: number) => void;
}

function CarSelector({ handler, OnClick, onBack }: Props) {
    const [selectedCar, setSelectedCar] = useState<number | null>(null);
    const backButtonSize = "25";
    return (<div className={Styles.carMenu}>
                <button className={Styles.carButton} onClick={() => onBack?.(0)} title="Back">
                    <svg width={backButtonSize} height={backButtonSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>
                {handler.data.map((data: CarData) => (
                    <button
                        key={data.id}
                        className={`${Styles.carButton} ${selectedCar === data.id ? Styles.selected : ""}`}
                        onClick={() => {
                            setSelectedCar(data.id);
                            OnClick?.(data.id);
                        }}
                    >
                        {data.name}
                    </button>
                ))}
            </div>
    );
}

export default CarSelector;
