let poligonPoints = [];
let editionMode = false;
let selectedPoint = null;
let pressed = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('#1a1c20')
    //noFill();
    
    //Draw poligon lines
    beginShape();
        fill('#f0a500');
        poligonPoints.map(point => vertex(point.x, point.y))
    endShape(CLOSE)
    
    //Draw poligon edition points
    if (editionMode) {
        poligonPoints.map(point => {
            strokeWeight(1);
            stroke(0)
            //See if the mouse is over the circle
            if(Math.hypot(mouseX - point.x, mouseY - point.y) <= 5){
                fill(255);
                if(pressed) {
                    selectedPoint = point;
                }else{
                    selectedPoint = null;
                }
            }else {
                fill(255);
            }
            circle(point.x, point.y, 10)
        })
    }
}

function keyPressed() {
    if (keyCode == ENTER) {
        if(editionMode) {
            editionMode = false;
        } else {
            editionMode = true;
        }
    }
}

/*
function nearPoint(points, distance) {
    for(let i = 0; i < points.length; i++) {
        if(Math.hypot((mouseX - centerX) - shape[i].x, (mouseY - centerY) - shape[i].y) <= distance) {
            return i;
        }
    }
    return null;
};
*/

function mouseClicked() {
    print(editionMode)
    if (!editionMode) {
        poligonPoints.push({ x: mouseX, y: mouseY });
        print("add a point")
    }
}

function mousePressed() {
    pressed = true;
}

function mouseDragged() {
    if(selectedPoint != null) {
        selectedPoint.x = mouseX;
        selectedPoint.y = mouseY;
    }
}

function mouseReleased() {
    pressed = false;
}
