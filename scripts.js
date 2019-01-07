let carPosition = { left: 0, top: 500 };
let roadPosition = { x: 0, y: 0 };
obstacle1Position = { left: 0, top: 50 };
obstacle2Position = { left: 200, top: -100 };
obstacle3Position = { left: 350, top: 50 };

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

const isInCarTopRange = function(obstaclePosition) {
  return (
    obstaclePosition.top > carPosition.top - 110 &&
    obstaclePosition.top < carPosition.top
  );
};

const isInCarSideRange = function(obstaclePosition) {
  return (
    obstaclePosition.left > carPosition.left &&
    obstaclePosition.left < carPosition.left + 70
  );
};

const hasColapsed = function(obstaclePosition) {
  return (
    isInCarTopRange(obstaclePosition) && isInCarSideRange(obstaclePosition)
  );
};

const alertIfGameOver = function(obstaclePosition) {
  if (hasColapsed(obstaclePosition)) {
    alert("Game Over");
  }
};

const setObstacle1Attributes = function() {
  const obstacle1 = document.getElementById("obstacle1");
  obstacle1.setAttribute(
    "style",
    "background-color: green;left:" +
      obstacle1Position.left +
      "px;top:" +
      obstacle1Position.top +
      "px"
  );
};

const updateObstacle1Position = function() {
  if (obstacle1Position.top >= 600) {
    obstacle1Position.top = 50;
  }
  obstacle1Position.top += 5;
  setObstacle1Attributes();

  alertIfGameOver(obstacle1Position);
};

const setObstacle2Attributes = function() {
  const obstacle2 = document.getElementById("obstacle2");

  obstacle2.setAttribute(
    "style",
    "left:" +
      obstacle2Position.left +
      "px; background-color: green;top:" +
      obstacle2Position.top +
      "px;"
  );
};

const updateObstacle2Position = function() {
  if (obstacle2Position.top >= 600) {
    obstacle2Position.top = -50;
  }
  obstacle2Position.top += 5;
  setObstacle2Attributes();
  alertIfGameOver(obstacle2Position);
};

const setObstacle3Attributes = function() {
  const obstacle3 = document.getElementById("obstacle3");
  obstacle3.setAttribute(
    "style",
    "background-color:green;left: " +
      obstacle3Position.left +
      "px; top:" +
      obstacle3Position.top +
      "px;"
  );
};

const updateObstacle3Position = function() {
  if (obstacle3Position.top >= 600) {
    obstacle3Position.top = 50;
  }
  obstacle3Position.top += 5;
  setObstacle3Attributes();

  alertIfGameOver(obstacle3Position);
};

const generateObstacles = function() {
  updateObstacle1Position();
  updateObstacle2Position();
  updateObstacle3Position();
};

const moveObstacles = function() {
  setInterval(generateObstacles, 100);
};
