"use client"

import { Canvas } from "@react-three/fiber";
import { createXRStore, XR } from "@react-three/xr";
import { Fullscreen } from "@react-three/uikit";
import { Defaults } from "@react-three/uikit-apfel";
import { Text } from '@react-three/uikit'
import { Card } from "@react-three/uikit-apfel"


const store = createXRStore()

export default function Scene({data} : {data: any}) {
    return (
      <>
        <button className="relative border border-white rounded-full w-fit p-2 mx-auto" onClick={() => store.enterAR}>Enter AR</button>
        <Canvas className="absolute top-0 left-0 h-screen">
            
            <XR store={store}>
            <ambientLight intensity={0.5} />
            <directionalLight intensity={1} position={[-5, 5, 10]} />
                <Defaults>
      <Fullscreen
        overflow="scroll"
        scrollbarColor="black"
        backgroundColor="white"
        dark={{ backgroundColor: "black" }}
        flexDirection="column"
        gap={32}
        paddingX={32}
        alignItems="center"
        padding={32}
      >
           <Card borderRadius={32} padding={32} gap={8} flexDirection="column">
    <Text fontSize={32}>Weather in Jihlava </Text>
    <Text fontSize={24} opacity={0.7}>
      {`Desc: ${data.weather[0].description}\nTemp: ${data.main.temp} Celsius\n Wind speed: ${data.wind.speed}`}
    </Text>
    
  </Card> 
      </Fullscreen>
      </Defaults>
            </XR>
        </Canvas>
      </>
    );
  }