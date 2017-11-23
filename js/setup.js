'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var wizardQuantity = 4;

var getRandomName = function () {
  var randomName = names[Math.floor(Math.random() * names.length)];
  var randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
  var name = randomName + ' ' + randomSurname;
  return name;
};

var getRandomCoatColor = function () {
  var randomCoatColor = coatColors[Math.floor(Math.random() * coatColors.length)];
  var coatColor = randomCoatColor;
  return coatColor;
};

var getRandomEyesColor = function () {
  var randomEyesColor = eyesColors[Math.floor(Math.random() * eyesColors.length)];
  var eyesColor = randomEyesColor;
  return eyesColor;
};

var wizards = [];

for (var k = 0; k < wizardQuantity; k++) {

  var wizardParams = {
    name: getRandomName(),
    coatColor: getRandomCoatColor(),
    eyesColor: getRandomEyesColor()
  };

  wizards.push(wizardParams);
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

var drawWizards = function () {
  fragment.appendChild(renderWizard(wizards[i]));
};

for (var i = 0; i < wizards.length; i++) {
  drawWizards();
}
similarListElement.appendChild(fragment);

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
