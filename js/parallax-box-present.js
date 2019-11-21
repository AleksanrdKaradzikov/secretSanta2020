
  const presentContainer = document.querySelector('.present-container'),
      presentBox = presentContainer.querySelector('.parallax-present'),
      maxMove = presentContainer.offsetWidth / 30,
      presentCenterX = presentBox.offsetLeft + (presentBox.offsetWidth / 2),
      presentCenterY = presentBox.offsetTop + (presentBox.offsetHeight / 2),
      fluidPresent = window.matchMedia("(min-width: 726px)");

function getMousePos(xRef, yRef) {

  let panelRect = presentContainer.getBoundingClientRect();
  return {
    x: Math.floor(xRef - panelRect.left) /(panelRect.right-panelRect.left)*presentContainer.offsetWidth,
    y: Math.floor(yRef - panelRect.top) / (panelRect.bottom -panelRect.top) * presentContainer.offsetHeight
    };
}

document.body.addEventListener("mousemove", function(e) {
  let mousePos = getMousePos(e.clientX, e.clientY),
  distX = mousePos.x - presentCenterX,
  distY = mousePos.y - presentCenterY;
  if (Math.abs(distX) < 500 && distY < 200 && fluidPresent.matches) {
    presentBox.style.transform = "translate("+(-1*distX)/12+"px,"+(-1*distY)/12+"px)";
    presentContainer.style.backgroundPosition = `calc(50% + ${distX/50}px) calc(50% + ${distY/50}px)`;
  }
})