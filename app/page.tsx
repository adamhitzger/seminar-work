import Scene from "@/components/Scene";
import { headers } from "next/headers";


export default async function Home() {
  const apiKey = process.env.OPEN_WEATHER_API_URL;
  let data;
  try{
    const res = await fetch(`${apiKey}`);
    if(!res.ok){
      throw new Error("Chyba při načítání počasí");
    }
     data = await res.json();
     console.log(data)
  } catch(error){
    console.error("Error: ",error)
    
  }
  return (
    <Scene data={data}/>
  );
}
