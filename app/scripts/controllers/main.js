'use strict';

angular.module('WordWaveApp')
  .controller('MainCtrl', function ($scope) {
    $scope.letters = {
      "א": window.alef,
      "ב": window.bet,
      "ג": window.gimel,
      "ד": window.daled,
      "ה": window.hei,
      "ו": window.vav,
      "ז": window.zai,
      "ח": window.het,
      "ט": window.tet,
      // "י": window.yud,
      // "כ": window.kaf,
      // "ל": window.lamed,
      // "מ": window.mem,
      // "נ": window.nun,
      // "ס": window.sameh,
      // "ע": window.aayn,
      // "פ": window.pay,
      // "צ": window.ztadic,
      // "ק": window.kuf,
      // "ר": window.raish,
      // "ש": window.shin,
      // "ת": window.taf
    };

    $scope.currentLetter = "א";
    $scope.words = $scope.letters[$scope.currentLetter];
    $scope.currentWordIndex = 0

    $scope.switchLetter = function(letter) {
      $scope.currentLetter = letter;
      $scope.words = $scope.letters[$scope.currentLetter];
      $scope.currentWordIndex = 0
    };

    $scope.progressPrecentes = function() {
      return $scope.currentWordIndex / ($scope.words.length - 1) * 100
    };

    $scope.nextWord = function() {
      $scope.showInterpretation = false;
      if (!$scope.isNextDisabled()) {
        $scope.currentWordIndex += 1;
      };
    };

    $scope.previousWord = function() {
      $scope.showInterpretation = false;
      if (!$scope.isPreviousDisabled()) {
        $scope.currentWordIndex -= 1;
      };
    };

    $scope.isNextDisabled = function() {
      return $scope.currentWordIndex == $scope.words.length - 1
    };

    $scope.isPreviousDisabled = function() {
      return $scope.currentWordIndex == 0
    }
  });
