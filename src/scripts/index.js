// import '../assets/tools/jquery-3.6.0.min.js';
// import '../assets/tools/magnific-popup.min.js';
import '../styles/index.scss';

import { elementAnimation } from './extra/animations';
import { popup } from './extra/popup';
import { smoothShowBlock } from './extra/showBlock';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	/* SHOW/HIDE BLOCK */
	smoothShowBlock('openButton', 'openBlock', '_active');

	/* ZOOM for PLUS buttons on mobile devices */
	popup('popup');

	/*  ANIMATIONS */
	elementAnimation('appearingBlock', '_animated2');
});
