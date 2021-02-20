var ball_option = {
    restitution:1.0
  }
    ball = Bodies.circle(200,100,20,ball_option);
    ball1 = Bodies.circle(300,100,20,ball_option);
    ball2 = Bodies.circle(100,100,20,ball_option);
  
  
    World.add(world,ball);
    console.log(ground);
    console.log(ground.position.x);
    console.log(ground.position.y);
  
  
  
  
  function draw() {
    background(0);  
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,200,20);
    rect(ground.position.x,ground.position.y,300,20);
    rect(ground.position.x,ground.position.y,100,20);
  
  
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y,20,20);
    ellipse(ball.position.x, ball.position.y,30,30);
    ellipse(ball.position.x, ball.position.y,40,40);
  }