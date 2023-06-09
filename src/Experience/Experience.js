import * as THREE from "three"
import Camera from "./Camera"
import Sizes from "./Ultis/Sizes"
import Renderer from "./Renderer"
import Time from "./Ultis/Time"
import World from './World/World.js'
import Resources from "./Ultis/Resources"
import asset from "./Ultis/asset"

export default class Experience{
    static instance
    constructor(canvas){

        if(Experience.instance){
            return Experience.instance
        }
        Experience.instance = this
        this.canvas= canvas
        this.scene = new THREE.Scene()
        this.time = new Time()
        this.sizes= new Sizes();
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.resources = new Resources(asset)
        this.world = new World()
        

        this.sizes.on('resize',()=>{
            this.resize()
         })
        this.time.on('update',()=>{
            this.update()
        })
       


        // const scene = new THREE.Scene();
        // const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        // const renderer = new THREE.WebGLRenderer();
        // renderer.setSize( window.innerWidth, window.innerHeight );
        // document.body.appendChild( renderer.domElement );

        // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        // const cube = new THREE.Mesh( geometry, material );
        // scene.add( cube );

        // camera.position.z = 5;

        // function animate() {
        //     requestAnimationFrame( animate );

        //     cube.rotation.x += 0.01;
        //     cube.rotation.y += 0.01;

        //     renderer.render( scene, camera );
        // };

        // animate();
    }
    resize(){
        this.camera.resize()
        this.renderer.resize()

    }
    update(){
        this.camera.update()
        this.renderer.update()

    }
}