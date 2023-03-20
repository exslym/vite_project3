import '../styles/index.scss';
import { main } from './main/main';
import menuBurger from './main/menuBurger';
import mobileZoom from './main/mobileZoom';
import modals from './main/modals';
import resultPage from './main/resultPage';
import { nextQuestion, testEndButton, testStartButton } from './portfolioTests/testOptions';
import { firstTestBlock, portfolioTests } from './portfolioTests/tests';

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // MAIN (START PAGE, MENU LINKS):
  main();

  // MENU-BURGER:
  menuBurger();

  // MODALS:
  modals();

  // ZOOM IMAGES IN MOBILE DEVICES:
  mobileZoom();

  // START TEST BUTTON:
  testStartButton();

  // START FIRST TEST BLOCK:
  firstTestBlock();

  // NEXT QUESTION BUTTON:
  nextQuestion();

  // END TEST BUTTON:
  testEndButton();

  // RESULT PAGE:
  resultPage();

  // TESTS:
  portfolioTests();
});
