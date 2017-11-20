'use strict';

window.renderStatistics = function (ctx, names, times) {
  var histogramHeight = 150; // px
  var cloudWidth = 420; // px
  var cloudHeight = 270; // px
  var indentShadow = 10; // px
  var marginLeft = 100; // px
  var marginTop = 10; // px
  var step = histogramHeight / Math.max.apply(null, times); // px
  var columnWidth = 40; // px
  var indent = 50; // px
  var initialX = 160; // px;
  var initialY = 250; // px
  var lineHeight = 10; // px

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(marginLeft + indentShadow, marginTop + indentShadow, cloudWidth, cloudHeight);
  ctx.fillStyle = 'white';
  ctx.fillRect(marginLeft, marginTop, cloudWidth, cloudHeight);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', marginLeft + indent, marginTop + lineHeight);
  ctx.fillText('Список результатов:', marginLeft + indent, marginTop + lineHeight * 3);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  for (var i = 0; i < times.length; i++) {
    times[i] = times[i].toFixed();
    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(43, 92, 252, 0.' + getRandomInt(1, 9) + ')';

    ctx.fillRect(initialX + (columnWidth + indent) * i, initialY - times[i] * step, columnWidth, times[i] * step);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], initialX + (columnWidth + indent) * i, initialY + lineHeight);
    ctx.fillText(times[i], initialX + (columnWidth + indent) * i, initialY - times[i] * step - lineHeight * 2);
  }
};

