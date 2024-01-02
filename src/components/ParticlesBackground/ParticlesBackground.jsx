import { loadFull } from "tsparticles";
import particlesConfig from "./particlesjs-config";
import Particles from "react-tsparticles";
import { tsParticles } from "@tsparticles/engine"; // not needed with CDN
import * as configs from "@tsparticles/configs"; // not needed with CDN


const ParticlesBackground = () => {
  console.log(Object.keys(configs.default));

  console.log(configs.default.polygonMask);
  let myoptions = {...configs.default.polygonMask}
  myoptions.interactivity.events.onHover.enable=false
  
  async function loadParticles(main){
    console.log(main);
    await loadFull(main)
  }
  return (
    <Particles 
      init={loadParticles} 
      options={myoptions}
    />
  )
}

export default ParticlesBackground