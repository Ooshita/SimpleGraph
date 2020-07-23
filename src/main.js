const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var objX, objY;
var objWidth, objHeight;
var x, y, relX, relY;
var dragged;

var box = new Array()
var i = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
  
function drawRect() {
  //context.clearRect(0, 0, canvas.width, canvas.height); // キャンバスをクリア
  box[i] = ctx.fillRect(objX, objY, objWidth, objHeight);
  i++;
}

canvas.addEventListener('dragstart', function(event) {
    dragged = event.target;
    event.target.style.opacity = .5;
}, false);

canvas.addEventListener('dragend', function(event) {
    event.target.style.opacity = "";
    // オブジェクトの大きさを定義
    objWidth = 150;
    objHeight = 50;

    x = event.clientX;
    y = event.clientY;
    objX = x;
    objY = y;

    // オブジェクトを描画
    drawRect(event.target.getContext);
}, false);

canvas.addEventListener("dragover", function(event) {
    // prevent default to allow drop
  }, false);

canvas.addEventListener('dblclick', function(event) {
    x = event.clientX;
    y = event.clientY;
    objX = x;
    objY = y;
    // オブジェクトを描画
    drawRect();
}, false);