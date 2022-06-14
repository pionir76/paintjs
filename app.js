"use strict";

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

const func = () => console.log("asdfasdf");

class Counter {
  constructor(callBack) {
    this.counter = 0;
    this.callBack = callBack;
  }

  increase(callBackFunc) {
    this.counter++;
    console.log(this.counter);

    if (this.counter % 5 === 0) {
      this.callBack();
    }
  }
}

const cnt = new Counter(printSomething);

function printSomething() {
  console.log("test....");
}

cnt.increase();
cnt.increase();
cnt.increase();
cnt.increase();
cnt.increase();
cnt.increase();
cnt.increase();
cnt.increase();
cnt.increase();
