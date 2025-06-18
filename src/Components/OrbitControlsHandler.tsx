import {OrbitControls} from "@react-three/drei";

function OrbitControlsHandler() {
    return <OrbitControls enablePan={false} enableDamping maxPolarAngle={1.5} minPolarAngle={0.8} maxDistance={10} minDistance={3}>
    </OrbitControls>
}

export default OrbitControlsHandler;