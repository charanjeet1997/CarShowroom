export function DirectionalLight() {
    return <directionalLight
        position={[-15, 20, 0]}
        intensity={1}
        castShadow
        shadow-bias={-0.0005}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
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