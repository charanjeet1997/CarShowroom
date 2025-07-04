import {Canvas} from "@react-three/fiber";
import {AmbientLight, DirectionalLight, HemisphereLight} from "./Components/LightHandler.tsx";
import { Environment,PerspectiveCamera} from "@react-three/drei";
import Styles from './App.module.css';
import OrbitControlsHandler from "./Components/OrbitControlsHandler.tsx";
import CarSpawner from "./Components/CarSpawner.tsx";
import {CarDataHandler} from "./Data/CarData.ts";
import {useMemo, useState} from "react";
import UIHandler from "./Components/UI/UIHandler.tsx";
import {Color, type Group, type Object3DEventMap} from "three";
import CarPropertiesUpdater from "./Components/CarPropertiesUpdater.tsx";


function App() {
    const handler = useMemo(() => Init(), []);
    const [selectedCarId, SetSelectedCarId] = useState(0);
    const [autoRotate, SetAutoRotate] = useState(false);
    const [color, SetColor] = useState(handler.GetCarData(selectedCarId).Colors[0].color);
    const [selectedCar, setSelectedCar] = useState<Group<Object3DEventMap>>();
    const [materialMetallic, setMaterialMetallic] = useState(0.1);
    const [materialRoughness,setMaterialRoughness ] = useState(0.1);
    const [rotation, setRotation] = useState(0.5);
    const [elevation, setElevation] = useState(0.5);
    const [azimuth, setAzimuth] = useState(0.5);
    return <>
        <div className={Styles['canvasContainer']}>
            <Canvas gl={{ preserveDrawingBuffer: true, antialias: true, powerPreference: "high-performance" }} className={Styles['canvas']} shadows={true}>

                <mesh receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                    <planeGeometry args={[100, 100]} />
                    <shadowMaterial opacity={0.4}  />
                </mesh>
                <PerspectiveCamera fov={75} aspect={window.innerWidth / window.innerHeight}
                                   near={0.1} far={1000} position={[0,0,5]} makeDefault />
                <OrbitControlsHandler autoRotate={autoRotate}/>
                <CarSpawner handler={handler} id={selectedCarId} SetCar={(car) => {setSelectedCar(car);}}/>
                {selectedCar && <CarPropertiesUpdater color={color} car={selectedCar} roughness={materialRoughness} metalness={materialMetallic}/>}

                <DirectionalLight rotation={rotation}  elevation={elevation} azimuth={azimuth} />
                <HemisphereLight />
                <AmbientLight />

                <Environment files="Hdri/outdoor_umbrellas_4k.hdr" background
                     ground={{
                         height:5, // Ground height offset
                         radius: 50, // Ground radius
                         scale: 100, // Ground scale
                     }}
                >

                </Environment>
            </Canvas>
        <UIHandler handler={handler} setRoughness={setMaterialRoughness}
                   setMetallic={setMaterialMetallic} GetCarID={(id:number)=>{
             SetSelectedCarId(id);
        }}
           GetAutoRotate={SetAutoRotate} autoRotate={autoRotate}
           GetColor={SetColor} colorData={handler.GetCarData(selectedCarId).Colors}
           SetDirectionalLightRotation={setRotation} SetDirectionalLightElevation={setElevation}
           SetDirectionalLightAzimuth={setAzimuth}
        />
        </div>
    </>
}

export function Init()
{
    const handler = new CarDataHandler();

    handler.AddCarData({
        id: 0,
        name: "Audi",
        modelPath: "assets/GLB/Cars/audi.glb",
        Colors: [
            { name: "Glacier White", color: new Color().setRGB(0.93, 0.93, 0.93) },
            { name: "Mythos Black", color: new Color().setRGB(0.05, 0.05, 0.05) },
            { name: "Navarra Blue", color: new Color().setRGB(0.05, 0.25, 0.5) },
            { name: "Tango Red", color: new Color().setRGB(0.7, 0.1, 0.1) },
        ],
    });

    handler.AddCarData({
        id: 2,
        name: "Alfa Romeo",
        modelPath: "assets/GLB/Cars/alfa_romeo_stradale_1967.glb",
        Colors: [
            { name: "Rosso Alfa", color: new Color().setRGB(0.75, 0, 0) },
            { name: "Competizione Red", color: new Color().setRGB(0.8, 0.1, 0.1) },
            { name: "Vesuvio Gray", color: new Color().setRGB(0.3, 0.3, 0.3) },
        ],
    });

    handler.AddCarData({
        id: 3,
        name: "Nissan GTR",
        modelPath: "assets/GLB/Cars/nissan_gt-r.glb",
        Colors: [
            { name: "Ultimate Silver", color: new Color().setRGB(0.7, 0.7, 0.7) },
            { name: "Katsura Orange", color: new Color().setRGB(0.8, 0.4, 0.1) },
            { name: "Bayside Blue", color: new Color().setRGB(0.1, 0.3, 0.6) },
            { name: "Pearl White", color: new Color().setRGB(0.95, 0.95, 0.95) },
        ],
    });

    handler.AddCarData({
        id: 4,
        name: "Nissan Skyline GTR",
        modelPath: "assets/GLB/Cars/nissan_skyline_r34_gt-r.glb",
        Colors: [
            { name: "Bayside Blue", color: new Color().setRGB(0.1, 0.3, 0.6) },
            { name: "Midnight Purple", color: new Color().setRGB(0.25, 0.1, 0.3) },
            { name: "Spark Silver", color: new Color().setRGB(0.75, 0.75, 0.75) },
        ],
    });

    handler.AddCarData({
        id: 5,
        name: "BMW M4",
        modelPath: "assets/GLB/Cars/Bmw_M4.glb",
        Colors: [
            { name: "Brooklyn Grey", color: new Color().setRGB(0.45, 0.45, 0.45) },
            { name: "Isle of Man Green", color: new Color().setRGB(0.05, 0.5, 0.3) },
            { name: "Toronto Red", color: new Color().setRGB(0.7, 0.1, 0.1) },
            { name: "Black Sapphire", color: new Color().setRGB(0.05, 0.05, 0.05) },
        ],
    });

    handler.AddCarData({
        id: 6,
        name: "BMW M3",
        modelPath: "assets/GLB/Cars/free_bmw_m3_e30.glb",
        Colors: [
            { name: "Brilliant Red", color: new Color().setRGB(0.75, 0.05, 0.05) },
            { name: "Alpine White", color: new Color().setRGB(0.95, 0.95, 0.95) },
            { name: "Diamond Black", color: new Color().setRGB(0.1, 0.1, 0.1) },
        ],
    });

    handler.AddCarData({
        id: 7, // ⚠️ Fixed ID duplicate from 6 → 7 to avoid conflicts
        name: "Honda NSX",
        modelPath: "assets/GLB/Cars/honda_nsx_na2.glb",
        Colors: [
            { name: "Championship White", color: new Color().setRGB(0.95, 0.95, 0.95) },
            { name: "Indy Yellow Pearl", color: new Color().setRGB(0.9, 0.8, 0.2) },
            { name: "Valencia Red Pearl", color: new Color().setRGB(0.6, 0.1, 0.1) },
            { name: "Berlina Black", color: new Color().setRGB(0.05, 0.05, 0.05) },
        ],
    });


    return handler;
}

export default App;