function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  background ("#87CEEB")
  var xLocation = 0;
  
  //cats body shade
  //("#7F7F81")
  
  //cat body
  fill("#7F7F81")
  stroke("#7F7F81")
  ellipse(200,420,250,400)
  
  //collar
  fill("#000000")
  stroke("#000000")
  ellipse(200,230,160,125)
 
  //head
  fill ("#7F7F81")
  stroke("#7F7F81")
  ellipse(200,200,185,170)
   
  //bell
  fill("#FFD700")
  stroke("#FFD700")
  ellipse (200,295,18,18)
  
  //eye #1
  fill("#6FBA7F")
  stroke("#6FBA7F")
  ellipse(160,185,25,30)
  
  fill("#000000")
  ellipse(160,185,10,14)
  
  //eye #2
  fill("#6FBA7F")
  stroke("#6FBA7F")
  ellipse(240,185,25,30)
  
  fill("#000000")
  ellipse(240,185,10,14)
  
  //nose
  fill("#FF9DED")
  stroke("#FF9DED")
  rect(189,200,23,6)
  
  //eyebrows
  stroke("#000000")
  strokeWeight(3)
  line(170,170,150,165)
  
  stroke("#000000")
  strokeWeight(3)
  line(230,170,250,165)
  
  //mouth
  strokeWeight(2)
  line(185,220,200,209)
  
  strokeWeight(2)
  line(200,209,215,220)
 
  //whiskers
  stroke("#AAAAAA")
  line(55,192,115,199) 
  line(65,206,115,205)
  line(55,220,115,213)
  
  line(284,200,344,192)
  line(284, 207, 337, 205)
  line(284, 215, 344, 218)
  
  //ear#1
  fill("#7F7F81")
  strokeWeight(0)
  triangle(120,85,185,130,122,157)
  fill("#EF8BD7")
  triangle(129,105, 160, 125, 130, 147)
  
  //ear#2
  fill("#7F7F81")
  triangle(278, 80, 278, 154, 224, 122)
  fill("#EF8BD7")
  triangle(269, 100, 269, 145, 239, 124)
  
  
  
  



  
}