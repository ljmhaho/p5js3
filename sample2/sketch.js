function setup() { 
  createCanvas(600, 400); 
  background('#bde0fe'); // 하늘색 배경
  
  // === 구름 (좌우로 더 확장) ===
  noStroke();
  fill(255);
  ellipse(80, 80, 90, 55);
  ellipse(130, 80, 110, 65);
  ellipse(180, 80, 90, 50);
  ellipse(300, 60, 100, 60);
  ellipse(350, 60, 120, 70);
  ellipse(400, 60, 100, 60);
  ellipse(460, 120, 110, 65);
  ellipse(510, 120, 90, 55);
  ellipse(560, 120, 80, 50);

  // === 잔디 언덕 ===
  noStroke();
  fill('#88c057');
  ellipse(300, 420, 700, 150);
  ellipse(100, 420, 300, 100);
  ellipse(500, 420, 300, 100);

  // === 머리(검정 단발) ===
  noStroke();
  fill(0);
  arc(300, 280, 170, 200, PI, 0, CHORD);
  rect(215, 180, 25, 100);
  rect(360, 180, 25, 100);

  // === 얼굴 ===
  stroke(0);
  strokeWeight(1);
  fill(255, 224, 189);
  ellipse(300, 200, 150, 165);

  // === 머리(앞쪽 덮임) ===
  noStroke();
  fill(0);
  arc(300, 180, 170, 200, PI, 0, CHORD);
  rect(215, 180, 25, 100);
  rect(360, 180, 25, 100);

  // === 앞머리 빈틈(삼지창처럼) ===
  fill(255, 224, 189);
  triangle(265, 200, 275, 200, 270, 160);
  fill(255, 224, 189);
  triangle(325, 200, 335, 200, 330, 160);

  // === 눈 ===
  stroke(0);
  strokeWeight(1);
  fill(255);
  ellipse(270, 200, 30, 20);
  ellipse(330, 200, 30, 20);
  fill(0);
  ellipse(270, 200, 12, 13);
  ellipse(330, 200, 12, 13);
  fill(255);
  ellipse(272, 198, 3, 3);
  ellipse(332, 198, 3, 3);

  // === 볼터치 ===
  noStroke();
  fill(255, 150, 150, 120);
  ellipse(260, 225, 25, 15);
  ellipse(340, 225, 25, 15);

  // === 코 ===
  stroke(100);
  strokeWeight(2);
  line(300, 210, 300, 225);
  noStroke();

  // === 입 ===
  noFill();
  stroke(150, 0, 0);
  strokeWeight(2);
  arc(300, 240, 40, 20, 0, PI);
  noStroke();

  // === 귀 ===
  fill(255, 224, 189);
  ellipse(240, 210, 30, 30);
  ellipse(360, 210, 30, 30);

  // === 귀걸이 ===
  fill(200);
  ellipse(238, 225, 6, 12);
  ellipse(362, 225, 6, 12);

  // === 목 ===
  noStroke();
  fill(255, 224, 189);
  rect(285, 255, 30, 45, 8);

  // === 상반신 ===
  fill(0);
  rect(210, 290, 180, 200, 40); // 가디건

  fill(255);
  rect(253, 290, 90, 200); // 티셔츠

  // === 티셔츠 단추 ===
  fill(0);
  ellipse(300, 300, 6, 6);
  ellipse(300, 315, 6, 6);
  ellipse(300, 330, 6, 6);
}
