class Platform{

    constructor(x,y,width,height){
  
      var options={
  
         isStatic : true,

         density  : 1,

         friction : 0.01

      
      }
   
      
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.width = width
      this.height = height
      this.colour = "red"
      World.add(world,this.body)
  
    }
  
   display(){
  
      var pos = this.body.position
  
      push()
      rectMode(CENTER)
      fill(this.colour)
      rect(pos.x,pos.y,this.width,this.height);
      pop()
  
   }
  
  
  }