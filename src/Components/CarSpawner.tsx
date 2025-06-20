import { Group, type Object3DEventMap} from "three";
import {CarDataHandler} from "../Data/CarData.ts";
import {useGLTF} from "@react-three/drei";
import {useState} from "react";

interface Props
{
    id: number;
    handler: CarDataHandler
    SetCar: (car: Group<Object3DEventMap>) => void;
}
function CarSpawner({handler,id,SetCar}: Props)
{
    const [carID, setCarID] = useState(-1)
    const [carScene, setCarScene] = useState<Group<Object3DEventMap>>()
    const car = useGLTF(handler.GetCarData(id as number).modelPath);
    if(carID !== id)
    {
        setCarID(id);
        SetCar(car.scene);
        car.scene.scale.set(1,1,1);
        setCarScene(car.scene);
        return <primitive object={car.scene} />;
    }
    return carScene && <primitive object={carScene} />;
}

export default CarSpawner;