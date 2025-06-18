import {Canvas} from "@react-three/fiber";
import {AmbientLight, DirectionalLight, HemisphereLight} from "./Components/LightHandler.tsx";
import {Environment, PerspectiveCamera} from "@react-three/drei";
import Styles from './App.module.css';
import OrbitControlsHandler from "./Components/OrbitControlsHandler.tsx";
import CarSpawner from "./Components/CarSpawner.tsx";
import CarSelector from "./Components/UI/CarSelector.tsx";
import {CarDataHandler} from "./Data/CarData.ts";
import {useState} from "react";


let handler: CarDataHandler;
function App() {
    const [selectedCarId, SetSelectedCarId] = useState(0);
    handler = Init();
    return <div className={Styles['canvasContainer']}>
        <Canvas gl={{antialias: true}} className={Styles['canvas']} shadows={true}>
            <Environment files="public/Hdri/outdoor_umbrellas_4k.hdr" background
             ground={{
                height:5, // Ground height offset
                radius: 50, // Ground radius
                scale: 100, // Ground scale
            }}
            >

            </Environment>
            <mesh receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
                <planeGeometry args={[500, 500]} />
                <shadowMaterial opacity={1} />
            </mesh>
            <PerspectiveCamera fov={75} aspect={window.innerWidth / window.innerHeight}
                               near={0.1} far={1000} position={[0,0,5]} makeDefault />
            <OrbitControlsHandler />
            <CarSpawner handler={handler} id={selectedCarId}  />
            {/*<LoadGarage/>*/}
            <DirectionalLight />
            <HemisphereLight />
            <AmbientLight />
        </Canvas>


        <CarSelector handler={handler} OnClick={(id) => {
            SetSelectedCarId(id);
            console.log(selectedCarId);
        }}></CarSelector>
    </div>
}

export function Init()
{
    const handler = new CarDataHandler();
    handler.AddCarData({id: 0,name: "Porsche", modelPath: "public/assets/GLB/Cars/2020_porsche_718_cayman_gt4.glb"});
    handler.AddCarData({id: 1,name: "Nissan", modelPath: "public/assets/GLB/Cars/2015_nissan_370z_nismo_z34.glb"});
    return handler;
}

export default App;