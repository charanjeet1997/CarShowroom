import {Color, Mesh, MeshStandardMaterial} from "three";
import {CarDataHandler} from "../Data/CarData.ts";
import {useGLTF} from "@react-three/drei";

interface Props
{
    id?: number;
    handler: CarDataHandler
    color: Color
}
function CarSpawner({handler,id,color}: Props)
{
    return <>

        <SpawnCar id={id} handler={handler} color={color}></SpawnCar>
        {/*<SpawnCar id={0}></SpawnCar>*/}
    </>
}

function SpawnCar({id,handler,color}:Props)
{
    const car = useGLTF(handler.GetCarData(id as number).modelPath);
    car.scene.traverse((child) => {
        const mesh = child as Mesh;
        mesh.castShadow = true;
        if(mesh.material)
        {
            const material = mesh.material as MeshStandardMaterial;
            if(material.name.toLowerCase().includes('tyre')||
                material.name.toLowerCase().includes('wheel')||
                material.name.toLowerCase().includes('neuma'))
            {
                material.roughness = 0.8;
                material.metalness = 0.1;
            }
            else {
                material.roughness = 0.2;
                material.metalness = 0.4;
            }
            if(material.name.toLowerCase()==="body")
                material.color = color;
        }
    })
    car.scene.scale.set(100,100,100);
    return <primitive object={car.scene} />;
}

export default CarSpawner;