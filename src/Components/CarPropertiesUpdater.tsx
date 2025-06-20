import {type Color, type Group, Mesh, MeshStandardMaterial, type Object3DEventMap} from "three";

interface Props{
    color: Color;
    car: Group<Object3DEventMap>;
    metalness: number;
    roughness: number;
}

function CarPropertiesUpdater({color,car,metalness,roughness}: Props)
{
    return <UpdateCar car={car} color={color} metalness={metalness} roughness={roughness}/>
}

function UpdateCar({color,car,metalness,roughness}: Props)
{
    car.traverse((child) => {
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
                material.roughness = roughness;
                material.metalness = metalness;

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
    });

    return <primitive object={car} color={color}/>;
}

export default CarPropertiesUpdater;