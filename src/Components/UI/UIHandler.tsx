import MainMenu from "./MainMenu.tsx";
import UIData from "../../Data/UIData.ts";
import CarSelector from "./CarSelector.tsx";
import {useState} from "react";
import type {CarDataHandler} from "../../Data/CarData.ts";
import ColorSelector from "./ColorSelector.tsx";
import type {Color} from "three";
import type {ColorData} from "../../Data/Data.ts";
import HeaderMenu from "./HeaderMenu.tsx";
import MaterialValueAdjuster from "./MaterialValueAdjuster.tsx";
import DirectionalLightAdjuster from "./DirectionalLightAdjuster.tsx";

interface Props {
    handler: CarDataHandler
    GetCarID: (carID: number) => void;
    GetColor: (color:Color) => void;
    autoRotate: boolean;
    GetAutoRotate: (autoRotate: boolean) => void;
    colorData: ColorData[];
    setRoughness: (value: number) => void;
    setMetallic: (value: number) => void;
    SetDirectionalLightRotation: (value: number) => void;
    SetDirectionalLightElevation: (value: number) => void;
    SetDirectionalLightAzimuth: (value: number) => void;
}
function UIHandler({handler,GetCarID,GetAutoRotate,autoRotate,GetColor,colorData,setRoughness,setMetallic,SetDirectionalLightRotation,SetDirectionalLightElevation,SetDirectionalLightAzimuth}: Props) {
    const [currentUI, setCurrentUI] = useState<keyof typeof UIData>(0);
    const [isMaterialUIEnabled, setMaterialUIEnabled] = useState(false);
    const [directionalLightUIEnabled, setDirectionalLightUIEnabled] = useState(false);
    // const [carID, setCarID] = useState<number>(0);
    return (
        <div>
            <>
            <HeaderMenu AdjustMaterialButtonClick={() => {
                setMaterialUIEnabled(true)
                setDirectionalLightUIEnabled(false)
            }}
            AdjustLightButtonClick={() => {
                setDirectionalLightUIEnabled(true)
                setMaterialUIEnabled(false)
            }}/>
            {isMaterialUIEnabled && <MaterialValueAdjuster SetRoughness={setRoughness} SetMetalness={setMetallic}  setMaterialUIEnabled={setMaterialUIEnabled}/>}
            {directionalLightUIEnabled && <DirectionalLightAdjuster SetRotation={SetDirectionalLightRotation} SetElevation={SetDirectionalLightElevation} SetAzimuth={SetDirectionalLightAzimuth} setDirectionalLightUIEnabled={setDirectionalLightUIEnabled}/>}
            </>
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

            {UIData[currentUI] === "ColorSelector" && <ColorSelector colorData={colorData}  onBack={(uiID: number) => {
                console.log(uiID);
                setCurrentUI(uiID as keyof typeof UIData);
            }}
             OnClick={GetColor} />}
        </div>
    );
}

export default UIHandler;
