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

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  for (var i = 0; i < times.length; i++) {
    // Определяем цвет колонки
    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(43, 92, 252, 0.' + getRandomInt(1, 9) + ')';

    var getColumnParam = function () {
      for (var k = 0; k < times.length; k++) {
        var ColumnPositoin = initialX + (HistogramParams.columnWidth + HistogramParams.indent) * k;
        var ColumnDirection = initialY - times[k] * step;
        var ColumnWidth = HistogramParams.columnWidth;
        var ColumnHeight = times[k] * step;
        var ColumnArray = [ColumnPositoin, ColumnDirection, ColumnWidth, ColumnHeight];
      }
      return ColumnArray;
    };
    // Рисуем колонки для гистограммы
    ctx.fillRect(getColumnParam());

    ctx.fillStyle = '#000';

    // Вставляем имена и время прохождения
    ctx.fillText(names[i], initialX + (HistogramParams.columnWidth + HistogramParams.indent) * i, initialY + textParams.indent);
    ctx.fillText(times[i].toFixed(), initialX + (HistogramParams.columnWidth + HistogramParams.indent) * i, initialY - times[i] * step - textParams.indent * 2);
  }
};
