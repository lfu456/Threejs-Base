import Experience from "../Experience";
import * as THREE from 'three'
export default class Enviroment {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
       
        this.setSunLight()
        this.setMoonLight()
    }
    
    setSunLight(){
        this.sunLight = new THREE.DirectionalLight(0xffffff, 2)
        this.sunLight.castShadow = true
        this.sunLight.shadow.camera.far = 20
        this.sunLight.shadow.mapSize.set(1024,1024)
        this.sunLight.shadow.normalBias = 0.05

        this.sunLight.position.set(1.5,7,3)
        this.scene.add(this.sunLight)
        
        this.ambientLight = new THREE.AmbientLight('#ffffff',0.8)
        this.scene.add(this.ambientLight)
    }
    setMoonLight(){
        this.sunLight = new THREE.DirectionalLight(0xffffff, 2)
        this.sunLight.castShadow = true
        this.sunLight.shadow.camera.far = 20
        this.sunLight.shadow.mapSize.set(1024,1024)
        this.sunLight.shadow.normalBias = 0.05

        this.sunLight.position.set(-1.5,-7,-3)
        this.scene.add(this.sunLight)
        
        this.ambientLight = new THREE.AmbientLight('#ffffff',0.8)
        this.scene.add(this.ambientLight)
    }
    resize(){
            
    }
    update(){
    
    }   
}