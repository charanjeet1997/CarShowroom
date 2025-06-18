import { useGLTF } from "@react-three/drei";
import {Mesh, MeshStandardMaterial} from "three";
export function LoadGarage() {
    const platform = useGLTF('/assets/GLB/sci-fi_garage.glb');
    platform.scene.traverse((child) => {
       const mesh = child as Mesh;
       if(mesh.material)
       {
          const material = mesh.material as MeshStandardMaterial;
          material.roughness = 0.5;
          material.metalness = 0.5;

       }
    })
    return <primitive object={platform.scene} />;
}
