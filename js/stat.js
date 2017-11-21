'use strict';

window.renderStatistics = function (ctx, names, times) {

  var CloudParams = {
    width: 420, // px
    height: 270, // px
    left: 100, // px
    top: 10, // px
    indentShadow: 10 // px
  };

  var HistogramParams = {
    height: 150, // px
    columnWidth: 40, // px
    indent: 50 // px
  };

  var textParams = {
    fontSize: 16, // px
    fontFamily: 'PT Mono',
    indent: 10 // px
  };

  var step = HistogramParams.height / Math.max.apply(null, times); // px
  var indent = 50; // px
  var initialX = CloudParams.left + indent; // px;
  var initialY = CloudParams.height - CloudParams.indentShadow - textParams.indent; // px

  // Рисуем тень облака
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(CloudParams.left + CloudParams.indentShadow, CloudParams.top + CloudParams.indentShadow, CloudParams.width, CloudParams.height);

  // Рисуем само облако
  ctx.fillStyle = 'white';
  ctx.fillRect(CloudParams.left, CloudParams.top, CloudParams.width, CloudParams.height);

  // Вставляем текст
  ctx.fillStyle = '#000';
  ctx.font = textParams.fontSize + 'px' + textParams.fontFamily;
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CloudParams.left + indent, CloudParams.top + textParams.indent);
  ctx.fillText('Список результатов:', CloudParams.left + indent, CloudParams.top + textParams.indent + textParams.fontSize);

  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  var drawColumn = function (name, time, i) {
    // Определяем цвет колонки
    ctx.fillStyle = name === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(43, 92, 252, 0.' + getRandomInt(1, 9) + ')';
    // Рисуем колонку
    ctx.fillRect(initialX + (HistogramParams.columnWidth + indent) * i, initialY - time * step, HistogramParams.columnWidth, time * step);

    ctx.fillStyle = '#000';
    // Вставляем имя и время прохождения
    ctx.fillText(name, initialX + (HistogramParams.columnWidth + HistogramParams.indent) * i, initialY + textParams.indent);
    ctx.fillText(time.toFixed(), initialX + (HistogramParams.columnWidth + HistogramParams.indent) * i, initialY - time * step - textParams.indent * 2);
  };

  times.forEach(function (time, i) {
    drawColumn(names[i], time, i);
  });
};
