import Experience from "../Experience";
import * as THREE from 'three'
import Room from "./Room";
import Controls from "./Controls";
import Enviroment from "./Enviroment.js";
import Floor from "./Floor";
export default class World{
    constructor(){
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.camera = this.experience.camera
        this.resources = this.experience.resources
       // console.log(this.camera, this.camera.perspectiveCamera)
       this.resources.on("ready",()=>{
        this.enviroment = new Enviroment()
        this.room = new Room()
        this.Controls = new Controls()
        this.floor = new Floor()
        console.log(this.enviroment);
       // console.log('create room');
       })
      
    }
    
    resize(){
        
    }
    update(){
        if(this.room){
            this.room.update()
        }
        if(this.Controls){
            this.Controls.update()
        }
    }
}