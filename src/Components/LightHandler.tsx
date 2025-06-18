export function DirectionalLight() {
    return <directionalLight  color="white" position={[5,500,1]}
          intensity={1} castShadow={true} receiveShadow={true} frustumCulled={true}  shadow-mapSize-width={1024}
                              shadow-mapSize-height={1024}
                              shadow-camera-left={-10}
                              shadow-camera-right={10}
                              shadow-camera-top={10}
                              shadow-camera-bottom={-10} />
}

export function AmbientLight() {
    return <ambientLight  color="white" intensity={1} castShadow={true} receiveShadow={true} />
}

export function HemisphereLight() {
    return <hemisphereLight args={['white',3,1]} position={[0,5,0]} frustumCulled={true} />
}