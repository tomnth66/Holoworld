function setup(){
    createCanvas(500,500);
}

let word = 'Yes there is!';

function draw(){
    background('green');
   
    textSize(20);
    // textAlign(CENTER,CENTER);
    fill(0);
    translate(100,100);
  
    text(word, 0, 0);
  
    rotate(HALF_PI);
    text(word, 15, -130);
  
    rotate(HALF_PI);
    text(word, -110, -140);
  
    rotate(HALF_PI);
    text(word, -125,-25 );

    // let time = millis();
    // rotateX(time / 1000);
    // rotateZ(time / 1234);
    // text(word, 0, 0);
  
}

window.addEventListener('load', eventWindowLoaded, false);

function eventWindowLoaded () {
  canvasApp(); //包含整个Canvas应用程序
}
function canvasSupport (e) {
  
      return !!e.getContext;

}
function canvasApp () {
  var canvas = document.getElementById('defaultCanvas0');

  if (!canvasSupport(canvas)) {
      return; 
    }
  
  var ctx = canvas.getContext('2d');
  var w = canvas.width;
  var h = canvas.height;
  
  function drawGrid(ctx, w, h, stroke, steps){
    ctx.save();
    ctx.beginPath();
    for (var i = 0.5; i < w; i += steps) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, h);
    }
    for(var i = 0.5; i < h; i += steps) {
      ctx.moveTo(0, i);
      ctx.lineTo(w, i);
    }
    ctx.strokeStyle = stroke;
    ctx.stroke();
    ctx.restore();
  }
  // @param {Object} ctx - CanvasRenderingContext2D
  // @param {String} text - 绘制的文本内容
  // @param {Number} x - 文本起始点x轴坐标
  // @param {Number} y - 文本起始点y轴坐标
  // @param {Number} textDepth - 阴影的深度
  // @param {Boolean} isFill - 文本是否填充，true为填充，false为描边
  // @param {String} color - 文本颜色
  // @param {String} shadowColor - 阴影颜色
  // @param {Number} shadowBlur - 阴影距离
  // @param {Number} interval - 间距
  function draw3DText(ctx, text, x, y, textDepth,isFill, color, shadowColor, shadowBlur, interval) {
    var i;
    for (i = 0; i < textDepth; i++) {
      if(isFill) {
        ctx.fillText(text, x - i, y - i);
      } else {
        ctx.strokeText(text, x - i, y - i);
      }
    }
    ctx.shadowColor = shadowColor;
    ctx.shadowBlur = shadowBlur;
    ctx.shadowOffsetX = textDepth + interval;
    ctx.shadowOffsetY = textDepth + interval;
    
    if (isFill) {
      ctx.fillStyle = color;
      ctx.fillText(text, x - i, y - i);
    } else {
      ctx.strokeStyle = color;
      ctx.strokeText(text, x - i, y - i);
    }
    
  }
  function drawScreen () {
    drawGrid(ctx, w, h, '#eee', 10);
    
    ctx.font = '60px Verdana';
    ctx.textAlign = 'center';
    ctx.textBaseline= 'middle';
    
    draw3DText(ctx, 'word', w / 2, h / 2, 6, true, '#0094ed', '#000', 12, 2);
    
  }
  
  drawScreen();
  
}

