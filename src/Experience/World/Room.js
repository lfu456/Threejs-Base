import Experience from "../Experience";
import * as THREE from 'three'
import gsap from "gsap";
export default class Room {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.room = this.resources.items.roomkennen
        this.actualRoom=this.room.scene

        this.lerpX = {
            current:0,
            target:0,
            ease:0.1,
        }
        this.lerpY = {
            current:0,
            target:0,
            ease:0.1,
        }

        this.setModel()
        
        this.onMouseMove()
    }
    
    setModel(){
        this.actualRoom.children.forEach((child) =>{
            child.castShadow = true
            child.receiveShadow = true
            //console.log(child);
        })

        this.actualRoom.receiveShadow = true
        this.scene.add(this.actualRoom)
        this.actualRoom.scale.set(0.11,0.11,0.11)
        //this.actualRoom.rotation.y = Math.PI
    }
    
    onMouseMove(){
        window.addEventListener('mousemove',(e)=>{
            //console.log(e);
           
            this.rotationX = ((e.clientX - window.innerHeight / 2) * 2) / window.innerHeight;
            this.rotationY = ((e.clientY - window.innerWidth / 2) * 2) / window.innerWidth;
            
            
            this.lerpX.target = this.rotationX *0.09
            this.lerpY.target = this.rotationY *0.25


            this.lerpX.current = gsap.utils.interpolate(
                this.lerpX.current,
                this.lerpX.target,
                this.lerpX.ease
            )
            this.lerpY.current = gsap.utils.interpolate(
                this.lerpY.current,
                this.lerpY.target,
                this.lerpY.ease
            )

            this.actualRoom.rotation.x = this.lerpY.current
            this.actualRoom.rotation.y = this.lerpX.current

        })
    }
    resize(){
            
    }
    update(){
       
        
        
    }   
   
}