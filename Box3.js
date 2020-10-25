class Box3 extends BaseClass {
    constructor(x,y){
      super(x,y,50,30);
      this.visibility = 255;
    }
  
    display() {
      fill("gold")
    
      
  //console
  console.log(this.body.speed);
   if(this.body.speed<3){
     
    super.display()
   }else{
     
     World.remove(world,this.body);
     push()
     this.visibility = 255;
     this.visibility = this.visibility - 5
     tint(255,this.visibility)
     
     if(score<2000){
      score++
      }
    pop() 
   }
 
}
    }
  
  