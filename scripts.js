let carPosition = { left: 200, top: 650 };
let obstaclePosition = { left: 0, top: 0 };
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

const alertIfGameOver = function() {
  if (
    obstaclePosition.top == carPosition.top &&
    obstaclePosition.left == carPosition.left
  ) {
    alert("Game Over");
  }
};

const updateObstaclePosition = function() {
  const obstacle = document.getElementById("obstacle");
  obstaclePosition.top += 10;
  obstacle.setAttribute("style", "top:" + obstaclePosition.top + "px");
  alertIfGameOver();
  if (obstaclePosition.top > 660) {
    clearInterval(obstacleId);
  }
};

const moveObstacle = function() {
  obstacleId = setInterval(updateObstaclePosition, 100);
};
