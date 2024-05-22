//Project Name: Text workshop
//Author: DIY Girls
//Date Started: 
//Attribution: 
//Notes:
//Directions:

function setup() {
  createCanvas(displayWidth, displayHeight) 
  background(255)  
} 

function draw() {
  textSize(60)
  fill(155, 71, 71)
  text("PROTECT", random(width), random(height))
  textSize(60)
  fill(90, 87, 87)
  text("DONT LET ANYONE GET CLOSE", mouseX, mouseY)
}