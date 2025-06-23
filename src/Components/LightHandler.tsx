interface DirectionalLightProps {
   rotation: number;
   elevation: number;
   azimuth: number;
}

export function DirectionalLight({rotation,elevation,azimuth}:DirectionalLightProps) {
    return <directionalLight
        position={[rotation, elevation, azimuth]}
        intensity={1}
        castShadow
        shadow-bias={-0.00005}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
    />
}

export function AmbientLight() {
    return <ambientLight  color="white" intensity={1} />
}

export function HemisphereLight() {
    return <hemisphereLight args={['white',3,1]} position={[0,5,0]} frustumCulled={true} />
}