let carPosition = { left: 200, top: 650 };
let roadPosition = { x: 0, y: 0 };

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
    "background-color: red; width: 20px;height: 20px; position: relative; left:" +
      carPosition.left +
      "px; top:" +
      carPosition.top +
      "px;"
  );
};

const updateRoadPosition = function() {
  roadPosition.y += 100;
};

const moveRoad = function() {
  const road = document.getElementById("road");
  setInterval(function() {
    updateRoadPosition();
    road.setAttribute(
      "style",
      "background-position:" + roadPosition.x + "px " + roadPosition.y + "px"
    );
    console.log(road);
  }, 500);
};
