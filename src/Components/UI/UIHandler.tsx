import MainMenu from "./MainMenu.tsx";
import UIData from "../../Data/UIData.ts";
import CarSelector from "./CarSelector.tsx";
import {useState} from "react";
import type {CarDataHandler} from "../../Data/CarData.ts";
import ColorSelector from "./ColorSelector.tsx";
import type {Color} from "three";

interface Props {
    handler: CarDataHandler
    GetCarID: (carID: number) => void;
    GetColor: (color:Color) => void;
    autoRotate: boolean;
    GetAutoRotate: (autoRotate: boolean) => void;
}
function UIHandler({handler,GetCarID,GetAutoRotate,autoRotate,GetColor}: Props) {
    const [currentUI, setCurrentUI] = useState<keyof typeof UIData>(0);
    // const [carID, setCarID] = useState<number>(0);
    return (
        <div>

            {/* Conditionally render based on UIData */}
            {UIData[currentUI] === "MainMenu" && <MainMenu onUIClick={(uiID: number) => {
                console.log(uiID);
                setCurrentUI(uiID as keyof typeof UIData);
            }} autoRotate={autoRotate} OnAutoRotate={GetAutoRotate} />}
            {UIData[currentUI] === "CarSelector" && <CarSelector handler={handler} onBack={(uiID: number) => {
                console.log(uiID);
                setCurrentUI(uiID as keyof typeof UIData);
            }}
            OnClick={GetCarID} />}

            {UIData[currentUI] === "ColorSelector" && <ColorSelector  onBack={(uiID: number) => {
                console.log(uiID);
                setCurrentUI(uiID as keyof typeof UIData);
            }}
             OnClick={GetColor} />}
        </div>
    );
}

export default UIHandler;
