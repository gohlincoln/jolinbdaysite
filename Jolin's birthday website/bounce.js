document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.getElementById("bouncing-wrapper");
  let xPos = 50;
  let yPos = 50;
  let xSpeed = 2;
  let ySpeed = 2;

  function bounce() {
    const wrapperWidth = wrapper.clientWidth;
    const wrapperHeight = wrapper.clientHeight;
    const maxX = window.innerWidth - wrapperWidth;
    const maxY = window.innerHeight - wrapperHeight;

    xPos += xSpeed;
    yPos += ySpeed;

    // Reverse direction when hitting the edge
    if (xPos <= 0 || xPos >= maxX) xSpeed *= -1;
    if (yPos <= 0 || yPos >= maxY) ySpeed *= -1;

    wrapper.style.left = `${xPos}px`;
    wrapper.style.top = `${yPos}px`;

    requestAnimationFrame(bounce);
  }

  bounce();
});
