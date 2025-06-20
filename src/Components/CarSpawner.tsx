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
            if(material.name.toLowerCase().includes('tyre'))
            {
                material.roughness = 0.8;
                material.metalness = 0.1;
            }
            else if(material.name.toLowerCase().includes("window"))
            {
                material.roughness = 0.15;
                material.metalness = 0.5;
            }
            else if(material.name.toLowerCase().includes("body"))  {
                material.roughness = .08;
                material.metalness = .45;
            }
            else if(material.name.toLowerCase().includes("rim"))  {
                material.roughness = .08;
                material.metalness = .45;
            }
            else
            {
                material.roughness = .5;
                material.metalness = .1;
            }
            if(material.name.toLowerCase().includes("body"  ))
                material.color = color;
        }
    })
    car.scene.scale.set(1,1,1);
    return <primitive object={car.scene} />;
}

export default CarSpawner;