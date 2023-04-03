import Experience from "../Experience";
import * as THREE from 'three'
import gsap from "gsap";
export default class Floor {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
           
       

        this.setFloor()
        
    }   
    setFloor(){
        this.geometry = new THREE.PlaneGeometry(500,500,32)
        this.material = new THREE.MeshStandardMaterial({
            color: 0xE5D6CD0,
            

        })
        this.plane = new THREE.Mesh(this.geometry, this.material)
        this.scene.add(this.plane)
        this.plane.rotation.x = -Math.PI/2
        this.plane.position.y = -1
        this.plane.receiveShadow = true


    }

    resize(){
            
    }
    update(){
        
    }   
}

