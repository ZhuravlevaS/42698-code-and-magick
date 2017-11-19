'use strict';

var getMaxElement = function (times) {
  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i] / 1000;
    if (time > max) {
      max = time.toFixed(0);
      maxIndex = i;
    }
  }
  return {
    max: max,
    maxIndex: maxIndex
  };
};

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 150, 25);
  ctx.fillText('Список результатов:', 150, 45);

  var looser = getMaxElement(times);

  var histogramHeight = 150; // px
  var step = histogramHeight / (looser.max - 0); // px
  var columnWidth = 40; // px
  var indent = 50; // px
  var initialX = 160; // px;
  var initialY = 270; // px
  var lineHeight = 20; // px

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  for (var i = 0; i < times.length; i++) {
    times[i] = (times[i] / 1000).toFixed(0);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(43, 92, 252, 0.' + getRandomInt(0, 9) + ')';
    }
    ctx.fillRect(initialX + (columnWidth + indent) * i, initialY - times[i] * step, columnWidth, times[i] * step);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], initialX + (columnWidth + indent) * i, initialY - histogramHeight - lineHeight);
    ctx.fillText(times[i] + ' сек.', initialX + (columnWidth + indent) * i, initialY - histogramHeight - lineHeight * 2);
  }
};

