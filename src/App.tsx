import {Canvas} from "@react-three/fiber";
import {AmbientLight, DirectionalLight, HemisphereLight} from "./Components/LightHandler.tsx";
import {Environment, PerspectiveCamera} from "@react-three/drei";
import Styles from './App.module.css';
import OrbitControlsHandler from "./Components/OrbitControlsHandler.tsx";
import CarSpawner from "./Components/CarSpawner.tsx";
import {CarDataHandler} from "./Data/CarData.ts";
import {useState} from "react";
import UIHandler from "./Components/UI/UIHandler.tsx";
import ColorData from "./Data/ColorData.ts";


let handler: CarDataHandler;
function App() {
    const [selectedCarId, SetSelectedCarId] = useState(0);
    const [autoRotate, SetAutoRotate] = useState(false);
    const [color, SetColor] = useState(ColorData.White);
    handler = Init();

    return <>
        <div className={Styles['canvasContainer']}>
            <Canvas gl={{antialias: true}} className={Styles['canvas']} shadows={true}>
                <mesh receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                    <planeGeometry args={[100, 100]} />
                    <shadowMaterial opacity={0.4}  />
                </mesh>
                <PerspectiveCamera fov={75} aspect={window.innerWidth / window.innerHeight}
                                   near={0.1} far={1000} position={[0,0,5]} makeDefault />
                <OrbitControlsHandler autoRotate={autoRotate}/>
                <CarSpawner handler={handler} id={selectedCarId} color={color} />

                <DirectionalLight />
                <HemisphereLight />
                <AmbientLight />

                <Environment files="public/Hdri/outdoor_umbrellas_4k.hdr" background
                             ground={{
                                 height:5, // Ground height offset
                                 radius: 50, // Ground radius
                                 scale: 100, // Ground scale
                             }}
                >

                </Environment>
            </Canvas>
        <UIHandler handler={handler} GetCarID={SetSelectedCarId} GetAutoRotate={SetAutoRotate} autoRotate={autoRotate} GetColor={SetColor}></UIHandler>
        </div>
    </>
}

export function Init()
{
    const handler = new CarDataHandler();
    handler.AddCarData({id: 0,name: "Porsche", modelPath: "public/assets/GLB/Cars/2020_porsche_718_cayman_gt4.glb"});
    handler.AddCarData({id: 1,name: "Nissan", modelPath: "public/assets/GLB/Cars/2015_nissan_370z_nismo_z34.glb"});
    return handler;
}

export default App;