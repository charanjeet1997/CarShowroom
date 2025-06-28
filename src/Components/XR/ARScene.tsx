// import {createXRStore, IfInSessionMode, XR, XRHitTest} from "@react-three/xr";
// import {useState} from "react";
//
// interface Props {
//     isARModeEnabled: boolean;
// }
//
// function ARScene({isARModeEnabled}: Props)
// {
//     const [isARMode, setIsARMode] = useState()
//     const store = createXRStore();
//     return <XR store={store}>
//         <directionalLight position={[1,2,1]}/>
//         <ambientLight/>
//
//         <IfInSessionMode allow={'immersive-ar'} >
//             <XRHitTest/>
//         </IfInSessionMode>
//         <IfInSessionMode deny={'immersive-ar'}>
//         </IfInSessionMode>
//     </XR>
// }
// export default ARScene;