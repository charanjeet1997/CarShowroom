import {OrbitControls} from "@react-three/drei";

interface Props {
    autoRotate: boolean,
}

function OrbitControlsHandler({autoRotate}: Props) {
    return <OrbitControls enablePan={false} enableDamping maxPolarAngle={1.5} minPolarAngle={0.8} maxDistance={10} minDistance={3} autoRotate={autoRotate} >
    </OrbitControls>
}

export default OrbitControlsHandler;