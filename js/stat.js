'use strict';

window.renderStatistics = function (ctx, names, times) {

  var CloudParams = {
    WIDTH: 420, // px
    HEIGHT: 270, // px
    LEFT: 100, // px
    TOP: 10, // px
    INDENT_SHADOW: 10 // px
  };

  var HistogramParams = {
    HEIGHT: 150, // px
    COLUMN_WIDTH: 40, // px
    INDENT: 50 // px
  };

  var TextParams = {
    FONT_SIZE: 16, // px
    FONT_FAMILY: 'PT Mono',
    INDENT: 10 // px
  };

  var INDENT = 50; // px

  var step = HistogramParams.HEIGHT / Math.max.apply(null, times); // px
  var initialX = CloudParams.LEFT + INDENT; // px;
  var initialY = CloudParams.HEIGHT - CloudParams.INDENT_SHADOW - TextParams.INDENT; // px

  // Рисуем тень облака
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(CloudParams.LEFT + CloudParams.INDENT_SHADOW, CloudParams.TOP + CloudParams.INDENT_SHADOW, CloudParams.WIDTH, CloudParams.HEIGHT);

  // Рисуем само облако
  ctx.fillStyle = 'white';
  ctx.fillRect(CloudParams.LEFT, CloudParams.TOP, CloudParams.WIDTH, CloudParams.HEIGHT);

  // Вставляем текст
  ctx.fillStyle = '#000';
  ctx.font = TextParams.FONT_SIZE + 'px' + TextParams.FONT_FAMILY;
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CloudParams.LEFT + INDENT, CloudParams.TOP + TextParams.INDENT);
  ctx.fillText('Список результатов:', CloudParams.LEFT + INDENT, CloudParams.TOP + TextParams.INDENT + TextParams.r);

  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  var drawColumn = function (name, time, i) {
    // Определяем цвет колонки
    ctx.fillStyle = name === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(43, 92, 252, 0.' + getRandomInt(1, 9) + ')';
    // Рисуем колонку
    ctx.fillRect(initialX + (HistogramParams.COLUMN_WIDTH + INDENT) * i, initialY - time * step, HistogramParams.COLUMN_WIDTH, time * step);

    ctx.fillStyle = '#000';
    // Вставляем имя и время прохождения
    ctx.fillText(name, initialX + (HistogramParams.COLUMN_WIDTH + HistogramParams.INDENT) * i, initialY + TextParams.INDENT);
    ctx.fillText(time.toFixed(), initialX + (HistogramParams.COLUMN_WIDTH + HistogramParams.INDENT) * i, initialY - time * step - TextParams.INDENT * 2);
  };

  times.forEach(function (time, i) {
    drawColumn(names[i], time, i);
  });
};

