var fixedRect, movingRect, rect1;

function setup() {
  createCanvas(1200, 800);

  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "coral";

  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "pink";

  rect1 = createSprite(300, 400, 100, 100);
  rect1.shapeColor = "teal";
}

function draw() {
  background(0, 0, 0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect, rect1)) {
    movingRect.shapeColor = "lime";
    rect1.shapeColor = "lime";
  } else {
    movingRect.shapeColor = "pink";
    rect1.shapeColor = "teal";
  }

  drawSprites();
}

function isTouching(object1, object2) {
  if (
    object1.x - object2.x < object2.width / 2 + object1.width / 2 &&
    object2.x - object1.x < object2.width / 2 + object1.width / 2 &&
    object1.y - object2.y < object2.height / 2 + object1.height / 2 &&
    object2.y - object1.y < object2.height / 2 + object1.height / 2
  ) {
    return true;
  } else {
    return false;
  }
}
