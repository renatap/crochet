let img;

var inputButton;
var vScale = 16;
var saveCanvas;
var tileSize = vScale*12;

function setup() {
  createCanvas(windowWidth,windowHeight);
  pixelDensity(1);
  angleMode(DEGREES);
  saveCanvas =  createGraphics(tileSize, tileSize);
}

function preload() {
  img = loadImage("photo5.JPG");

  32;
  
  let fileInput = createFileInput(handleFile);
  fileInput.hide();
  
  inputButton = createButton('Upload');
  inputButton.position(windowWidth/2-inputButton.width/2,windowHeight/2+(tileSize/2)+20);
  inputButton.mousePressed(() => {
    fileInput.elt.click();
  });
}

function handleFile(file) {
if (file.type === 'image') {
    img = loadImage(file.data, (img) => {
    console.log(file.name)
      img = file.name;
      draw();
    });
  } else {
    console.log('Not an image file!');
  }
}

function draw() {
  frameRate(4);
  background(255);

  img.loadPixels();

  loadPixels();
  var pixelColors = [];
  var pixelValue = [];
console.log('hah', pixelColors);
  
  //resize image
  var newWidth = 500 / 5 / vScale;
  var newHeight = 500 / 5 / vScale;
  img.resize(newWidth, newHeight);
  
  console.log(img.width, img.height)
  
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let index = (x + y * img.width) * 4;
      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];

      pixelColors.push(r, g, b);

      var bright = (r + g + b) / 3;
      var p = 0;

      if (bright >= 100 && bright <= 150) {
        var p = 130;
      } else if (bright >= 151) {
        var p = 255;
      } else {
        var p = 0;
      }

      pixelValue.push(p);
      noStroke();

    }
  }

  function largePattern() {
    for (let a = 0; a < windowWidth; a = a + tileSize) {
      for (let b = 0; b < windowHeight; b = b + tileSize) {
          drawPattern(a, b);
      }
  }
    }

    largePattern();

    fill(0, 180);
    rect(0, 0, windowWidth, windowHeight)

  fill(230);
  let rectSize = tileSize*2;
rect(windowWidth/2-rectSize/2, windowHeight/2-rectSize/2, rectSize), 
  drawPattern(windowWidth/2-tileSize/2,windowHeight/2-tileSize/2);

function drawPattern(a,b) {
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {

        fill(pixelValue[x + (y*6)]);
  
      
      rect((x * vScale) + a, (y * vScale) + b, vScale);
    }
  }
  

for (let y = 0; y < img.height; y++) {
    for (let x =0 ; x < img.width; x++) {
      
        fill(pixelValue[x + (y*6)]);

      rect(((img.width-x) * vScale+vScale*5) + a, (y * vScale) + b, vScale);
    }
  }
  
for (let y = 0; y < img.height; y++) {
    for (let x =0 ; x < img.width; x++) {
      
        fill(pixelValue[x + (y*6)]);

      rect(((img.width-x) * vScale+vScale*5) + a, ((img.height-y) * vScale+vScale*5) + b, vScale);
    }
  }

for (let y = 0; y < img.height; y++) {
    for (let x =0 ; x < img.width; x++) {
      
        fill(pixelValue[x + (y*6)]);

      rect((x * vScale) + a, ((img.height-y) * vScale+vScale*5) + b, vScale);
    }
  }
}
    
  
  noLoop();
}

function keyReleased() {
  if (key == "f" || key == "F") saveCanvas(gd.timestamp(), "png");
  if (key == "s" || key == "S") {
    let c = get(windowWidth/2-(tileSize/2),windowHeight/2-(tileSize/2), 200, 200);
    saveCanvas.image(c, 0, 0);
    save(saveCanvas, frameCount+".png");
  };
}
