var ball, ballimg, paddle, paddleimg, block1, block2, block3, paddle2;

function preload() {
  /* preload your images here of the ball and the paddle */
  paddleimg = loadImage("paddle.png");
  ballimg = loadImage("ball.png");
}
function setup() {
  createCanvas(400, 400);
  /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(365, 200);
  paddle = createSprite(375, 200);
  paddle2 = createSprite(25, 200);

  /* assign the images to the sprites */
  ball.addImage("Lable1", ballimg);
  paddle.addImage("Lable2", paddleimg);
  paddle2.addImage("Lable3", paddleimg);

  /* give the ball an initial velocity of 5 in the X direction */
  ball.velocityX = 5;

}

function draw() {
  background(205, 153, 0);
  /* create Edge Sprites here */
  edges = createEdgeSprites();

  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);

  /* Allow the ball to bounceoff from both the paddle */
  ball.bounceOff(paddle, randomVelocity);
  ball.bounceOff(paddle2, randomVelocity);

  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */

  /* Prevent both paddle from going out of the edges */
  paddle.collide(edges[2]);
  paddle.collide(edges[3]);
  paddle2.collide(edges[2]);
  paddle2.collide(edges[3]);
  if (keyDown(UP_ARROW) && ball.x > 200) {
    /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y - 20;
  }

  if (keyDown(DOWN_ARROW) && ball.x > 200) {
    /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y + 20;
  }
  if (keyDown(UP_ARROW) && ball.x < 200) {
    /* what should happen when you press the UP Arrow Key */
    paddle2.y = paddle2.y - 20;
  }

  if (keyDown(DOWN_ARROW) && ball.x < 200) {
    /* what should happen when you press the UP Arrow Key */
    paddle2.y = paddle2.y + 20;
  }
  if (ball.x > 400 || ball.x < 0) {
    gamestate = END;
  }

  drawSprites();

}

function randomVelocity() {
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  //ball.velocityX=Math.round(random(10,-10));
  ball.velocityY = Math.round(random(10, -10));
}
