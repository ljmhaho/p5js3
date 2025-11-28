// 상태 변수
let cx = 300; 
let cy = 0; 
let cardiganStep = 0; // 가디건 색 순환
let mouthSmile = true; // 입 모양
let blinkForce = 0; // 깜빡임
let cloudShift = 0; // 구름 이동
let baseJump = 0; // 마우스 눌렀을 때 점프

function setup() { 
  createCanvas(600, 400); 
  frameRate(25);
}

function draw() {
  // 배경
  background('#bde0fe');

  // 구름(흐르게)
  cloudShift = (cloudShift + 3) % 2400;
  noStroke();
  fill(255);
  drawCloud(-100 + cloudShift*0.2, 140);
  drawCloud(-500 + cloudShift*0.28, 90);
  drawCloud(-180 + cloudShift*0.28, 0);
  drawCloud(-700 + cloudShift*0.28, 0);
  drawCloud(-900 + cloudShift*0.28, 40);

  // 잔디 언덕
  noStroke();
  fill('#88c057');
  ellipse(300, 420, 700, 150);
  ellipse(100, 420, 300, 100);
  ellipse(500, 420, 300, 100);

  // 자동 깜빡임(가끔)
  let autoBlink = (frameCount % 40 < 3) ? 1 : 0;
  let blink = max(blinkForce, autoBlink);
  if (blinkForce > 0) blinkForce -= 0.25;
  if (blinkForce < 0) blinkForce = 0;

  // 마우스 누르면 살짝 점프
  baseJump = mouseIsPressed ? -6 : 0;

  // 가벼운 아이들 모션
  let idleY = sin(frameCount * 0.18) * 2; // 호흡
  let idleRot = radians(sin(frameCount * 0.14) * 2); // 고개 작은 흔들림
  let eSwing = sin(frameCount * 0.35) * 2; // 귀걸이 흔들림

  // 캐릭터 그리기
  push();
  translate(cx, cy + baseJump + idleY);
  rotate(idleRot);
  drawCharacter(blink, eSwing);
  pop();
}

// 구름
function drawCloud(x, y) {
  // 화면 밖 래핑
  let xx = ((x + 900) % 1800) - 300;
  ellipse(xx - 30, y, 90, 55);
  ellipse(xx + 10, y, 110, 65);
  ellipse(xx + 50, y, 90, 50);
}

// 캐릭터
function drawCharacter(blink, eSwing) {
  // 뒤통수 + 옆머리
  noStroke();
  fill(0);

  // 클릭할 때 뒷머리 살짝 퍼지게
  let backWidth = mouseIsPressed ? 175 : 170;
  let backHeight = mouseIsPressed ? 205 : 200;
  let backY = mouseIsPressed ? 283 : 280;

  arc(0, backY, backWidth, backHeight, PI, 0, CHORD);
  rect(-85, 180, 25, 100);
  rect(60, 180, 25, 100);

  // 얼굴
  stroke(0);
  strokeWeight(1);
  fill(255, 224, 189);
  ellipse(0, 200, 150, 165);

  // 앞머리
  noStroke();
  fill(0);
  arc(0, 180, 170, 200, PI, 0, CHORD);
  rect(-85, 180, 25, 100);
  rect(60, 180, 25, 100);

  // 앞머리 빈틈
  fill(255, 224, 189);
  triangle(-35, 200, -25, 200, -30, 160);
  triangle(25, 200, 35, 200, 30, 160);

  // 눈(깜빡임 + 시선)
  let look = constrain((mouseX - width/2) * 0.02, -3, 3);
  stroke(0);
  strokeWeight(1);
  fill(255);
  ellipse(-30, 200, 30, max(4, 20 - blink*16));
  ellipse(30, 200, 30, max(4, 20 - blink*16));
  fill(0);
  ellipse(-30 + look, 200, 12, max(4, 13 - blink*10));
  ellipse(30 + look, 200, 12, max(4, 13 - blink*10));
  fill(255);
  ellipse(-28 + look, 198, 3, 3);
  ellipse(32 + look, 198, 3, 3);

  // 볼터치
  noStroke();
  fill(255, 120, 150, mouseIsPressed ? 230 : 100);
  ellipse(-40, 225, 25, 15);
  ellipse(40, 225, 25, 15);

  // 코
  stroke(100);
  strokeWeight(2);
  line(0, 210, 0, 225);
  noStroke();

  // 입
  noFill();
  stroke(150, 0, 0);
  strokeWeight(2);
  if (mouthSmile) arc(0, 240, 40, 20, 0, PI);
  else line(-20, 240, 20, 240);
  noStroke();

  // 귀
  fill(255, 224, 189);
  ellipse(-60, 210, 30, 30);
  ellipse(60, 210, 30, 30);

  // 귀걸이
  fill(200);
  ellipse(-62, 225 + eSwing, 6, 12);
  ellipse(62, 225 - eSwing, 6, 12);

  // 목
  noStroke();
  fill(255, 224, 189);
  rect(-15, 255, 30, 45, 8);

  // 상의(가디건 + 티셔츠 + 단추)
  let breath = sin(frameCount * 0.18) * 2;
  let col = cardiganStep % 4;
  if (col === 0) fill(0);
  else if (col === 1) fill('#3246a8');
  else if (col === 2) fill('#7a4c2f');
  else fill('#2f7a5b');
  rect(-90, 290 + breath, 180, 200, 40);

  fill(255);
  rect(-47, 290 + breath, 94, 200);

  fill(0);
  ellipse(0, 300 + breath, 6, 6);
  ellipse(0, 315 + breath, 6, 6);
  ellipse(0, 330 + breath, 6, 6);
}

// 키보드 인터랙션 + GIF 저장
function keyPressed() {
  // 이동
  if (keyCode === LEFT_ARROW) cx -= 10;
  if (keyCode === RIGHT_ARROW) cx += 10;
  if (keyCode === UP_ARROW) cy -= 8;
  if (keyCode === DOWN_ARROW) cy += 8;

  // 스타일 토글
  if (key === 'C' || key === 'c') cardiganStep++;
  if (key === 'M' || key === 'm') mouthSmile = !mouthSmile;
  if (key === 'B' || key === 'b') blinkForce = 1;

  // 10초 GIF 저장
  if (key === 'S' || key === 's') {
    if (typeof saveGif === 'function') {
      saveGif('my_caricature', 10);
    }
  }
}
