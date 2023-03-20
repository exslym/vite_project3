// import $ from 'jquery';
// require('../../../tools/magnific-popup.min.js');

export default function mobileZoom() {
  if (document.querySelector('.popup')) {
    $('.popup').magnificPopup();
  }
}
