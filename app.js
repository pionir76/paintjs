const canvas = document.getElementById("jsCanvas");

const ctx = canvas.getContext("2d");
ctx.strokeStyle = "#111827";
ctx.lineWidth = 2.5;

function startPaint() {}
function onMouseMove(event) {
  console.log(event);

  const x = event.offsetX;
  const y = event.offsetY;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
}
