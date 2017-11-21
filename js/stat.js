'use strict';

window.renderStatistics = function (ctx, names, times) {

  var CloudParams = {
    width: 420, // px
    height: 270, // px
    // left: 100, // px
    // top: 10, // px
    // indentShadow: 10 // px
  };

  var Indents = {
    histogramIndent: 50,
    left: 100, // px
    top: 10, // px
    indentShadow: 10, // px
    textIndent: 10 // px
  };

  var HistogramParams = {
    height: 150, // px
    columnWidth: 40, // px
  };

  var textParams = {
    fontSize: 16, // px
    fontFamily: 'PT Mono',
  };

  var step = HistogramParams.height / Math.max.apply(null, times); // px
  var indent = 50; // px
  var initialX = Indents.left + indent; // px;
  var initialY = CloudParams.height - Indents.indentShadow - Indents.textIndent; // px

  // Рисуем тень облака
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(Indents.left + Indents.indentShadow, Indents.top + Indents.indentShadow, CloudParams.width, CloudParams.height);

  // Рисуем само облако
  ctx.fillStyle = 'white';
  ctx.fillRect(Indents.left, Indents.top, CloudParams.width, CloudParams.height);

  // Вставляем текст
  ctx.fillStyle = '#000';
  ctx.font = textParams.fontSize + 'px' + textParams.fontFamily;
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', Indents.left + indent, Indents.top + Indents.textIndent);
  ctx.fillText('Список результатов:', Indents.left + indent, Indents.top + Indents.textIndent + textParams.fontSize);

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
    ctx.fillText(name, initialX + (HistogramParams.columnWidth + Indents.histogramIndent) * i, initialY + Indents.textIndent);
    ctx.fillText(time.toFixed(), initialX + (HistogramParams.columnWidth + Indents.histogramIndent) * i, initialY - time * step - Indents.textIndent * 2);
  };

  times.forEach(function (time, i) {
    drawColumn(names[i], time, i);
  });
};
