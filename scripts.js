let carPosition = { left: 200, top: 650 };
let roadPosition = { x: 0, y: 0 };
let score = 0;

const updateCarPosition = function(event) {
  if (event.key == "ArrowRight") {
    carPosition.left += 10;
  }
  if (event.key == "ArrowLeft") {
    carPosition.left -= 10;
  }
};

const moveCar = function(event) {
  updateCarPosition(event);
  const car = document.getElementById("car");
  car.setAttribute(
    "style",
    "left:" + carPosition.left + "px; top:" + carPosition.top + "px;"
  );
};

const updateRoadPosition = function() {
  const road = document.getElementById("road");
  roadPosition.y += 100;
  road.setAttribute("style", "background-position-y:" + roadPosition.y + "px");
};

const moveRoad = function() {
  setInterval(updateRoadPosition, 100);
};

const alertIfGameOver = function(obstaclePosition) {
  if (
    obstaclePosition.top == carPosition.top &&
    obstaclePosition.left == carPosition.left
  ) {
    alert("Game Over");
  }
};

const updateObstacle1Position = function() {
  const obstacle1 = document.getElementById("obstacle1");
  obstacle1Position.top += 10;
  obstacle1.setAttribute(
    "style",
    "width: 20px; height: 20px; background-color: green;top:" +
      obstacle1Position.top +
      "px"
  );
  alertIfGameOver(obstacle1Position);
};

const updateObstacle2Position = function() {
  const obstacle2 = document.getElementById("obstacle2");
  obstacle2Position.top += 10;
  obstacle2.setAttribute(
    "style",
    "width: 20px; height: 20px; background-color: green;top:" +
      obstacle2Position.top +
      "px;"
  );
  alertIfGameOver(obstacle2Position);
};

const updateObstacle3Position = function() {
  const obstacle3 = document.getElementById("obstacle3");
  obstacle3Position.top += 10;
  obstacle3.setAttribute(
    "style",
    "width: 30px; height: 30px; background-color: green;top:" +
      obstacle3Position.top +
      "px;"
  );
  alertIfGameOver(obstacle3Position);
};

const generateObstacles = function() {
  obstacle1Position = { left: 0, top: 30 };
  obstacle2Position = { left: 150, top: 0 };
  obstacle3Position = { left: 350, top: 60 };
  document.getElementById("road").innerHTML =
    "<div id ='car'></div><div id='obstacle1'></div><div id='obstacle2'></div><div id='obstacle3'></div>";
  obstacle1Id = setInterval(updateObstacle1Position, 100);
  obstacle2Id = setInterval(updateObstacle2Position, 200);
  obstacle3Id = setInterval(updateObstacle3Position, 100);
};

const moveObstacles = function() {
  setInterval(generateObstacles, 3000);
};
