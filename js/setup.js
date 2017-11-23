'use strict';

document.querySelector('.setup').classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var getRandomName = function () {
  var Randomname = names[Math.floor(Math.random() * names.length)];
  var Randomsurname = surnames[Math.floor(Math.random() * surnames.length)];
  var name = Randomname + ' ' + Randomsurname;
  return name;
};

var getRandomCoatColor = function () {
  var RandomcoatColor = coatColors[Math.floor(Math.random() * coatColors.length)];
  var coatColor = RandomcoatColor;
  return coatColor;
};

var getRandomEyesColor = function () {
  var RandomeyesColor = eyesColors[Math.floor(Math.random() * eyesColors.length)];
  var eyesColor = RandomeyesColor;
  return eyesColor;
};

var wizards = [
  {
    name: getRandomName(),
    coatColor: getRandomCoatColor(),
    eyesColor: getRandomEyesColor()
  },
  {
    name: getRandomName(),
    coatColor: getRandomCoatColor(),
    eyesColor: getRandomEyesColor()
  },
  {
    name: getRandomName(),
    coatColor: getRandomCoatColor(),
    eyesColor: getRandomEyesColor()
  },
  {
    name: getRandomName(),
    coatColor: getRandomCoatColor(),
    eyesColor: getRandomEyesColor()
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
