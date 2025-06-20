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

    return (
        <>
            <button className={Styles.backButton} onClick={() => onBack?.(0)}>
                ← Back
            </button>

            <div className={Styles.carMenu}>
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
        </>
    );
}

export default CarSelector;
