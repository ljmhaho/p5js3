let moveX = 0;
let moveY = 0;

function setup() {
  createCanvas(600, 400);
  colorMode(RGB);
}

function draw() {
  // 배경색 변경
  let c1 = color(240, 240, 240);
  let c2 = color(210, 230, 255);
  let amt = (sin(frameCount * 0.01) + 1) / 2;
  let bg = lerpColor(c1, c2, amt);
  background(bg);

  // 움직이기
  moveX = sin(frameCount * 0.02) * 30;
  moveY = cos(frameCount * 0.015) * 20;

  // 색 바꾸기
  let r = 150 + sin(frameCount * 0.02) * 100;
  let g = 150 + cos(frameCount * 0.015) * 100;
  let b = 200 + sin(frameCount * 0.01) * 55;

  // 십자 선
  stroke(50);
  strokeWeight(3);
  line(0, 200, 600, 200);
  line(300, 0, 300, 400);

  // 사각형들
  noStroke();
  fill(r, 100, 150);
  rect(50 + moveX, 50, 180, 100);

  fill(100, g, 220);
  rect(150, 120 + moveY, 200, 120);

  fill(250, 200, b);
  rect(320 - moveX, 250, 180, 100);

  // 가운데 원 크기 변경하기
  let bigSize = 140 + sin(frameCount * 0.03) * 30;
  fill(120, 200, 180);
  ellipse(200 + moveX, 200 + moveY, bigSize, bigSize);

  // 나머지 원들
  fill(220, 120, 180);
  ellipse(400 - moveX, 140, 160, 160);

  fill(100, 200, 250);
  ellipse(360, 280 - moveY, 100, 100);

  // 삼각형들
  fill(180, 180, 255);
  triangle(0, 400, 120, 240 + moveY, 240, 400);

  fill(255, 180, 180);
  triangle(600, 400, 480, 240 - moveY, 360, 400);

  // 미니 도형들
  fill(r, g, b);
  rect(100, 20, 20, 20);
  rect(160, 20, 20, 20);
  rect(220, 20, 20, 20);
  rect(280, 20, 20, 20);
  rect(340, 20, 20, 20);
  rect(400, 20, 20, 20);

  fill(80, 80, 200);
  ellipse(100, 300 + moveY / 2, 15, 15);
  ellipse(100, 330 + moveY / 2, 15, 15);
  ellipse(100, 360 + moveY / 2, 15, 15);
  ellipse(100, 390 + moveY / 2, 15, 15);

  // 가운데 사각형 회전하기
  push();
  translate(300, 200);
  rotate(frameCount * 0.01);
  noFill();
  stroke(80, 80, 200, 150);
  rect(-60, -60, 120, 120);
  pop();

  // 작은 원 깜빡이기
  let blinkAlpha = abs(sin(millis() * 0.002)) * 255;
  noStroke();
  fill(255, 255, 0, blinkAlpha);
  ellipse(500, 60, 20, 20);
}

// gif 저장
function mousePressed() {
  saveGif('과제4_20210942_이지민.gif', 10);
}
