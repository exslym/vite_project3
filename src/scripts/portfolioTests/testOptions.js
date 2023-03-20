// START TEST BUTTON:
export function testStartButton() {
  if (document.querySelector('.button-help')) {
    const startButton = document.querySelector('.button-help');
    const testBlock = document.querySelector('.test');
    const pageTitle = document.querySelector('head title').textContent;

    startButton.addEventListener('click', () => {
      startButton.style.display = 'none';
      testBlock.style.display = 'block';
      /* Google Analytics (UA) */
      console.log(`${pageTitle}_test_start`);
      // eslint-disable-next-line no-undef
      // ga(
      // 	'CNS_Portfolio_2022.send',
      // 	'event',
      // 	'button',
      // 	'test_start',
      // 	`${pageTitle}`
      // );
    });
  }
}

// END TEST BUTTON:
export function testEndButton() {
  if (document.querySelector('.button-result')) {
    const endButton = document.querySelector('.button-result');
    const pageTitle = document.querySelector('head title').textContent;

    endButton.addEventListener('click', () => {
      /* Google Analytics (UA) */
      console.log(`${pageTitle}_test_end`);
      // eslint-disable-next-line no-undef
      // ga(
      // 	'CNS_Portfolio_2022.send',
      // 	'event',
      // 	'button',
      // 	'test_end',
      // 	`${pageTitle}`
      // );
      switch (+localStorage.getItem('counter')) {
        case 6:
        case 5:
          // eslint-disable-next-line no-undef
          // ga(
          // 	'CNS_Portfolio_2022.send',
          // 	'event',
          // 	'result',
          // 	'Perfect: 5-6',
          // 	`${pageTitle}`
          // );
          console.log(`${pageTitle}-Test - Perfect: 5-6`);
          break;
        case 4:
          // eslint-disable-next-line no-undef
          // ga(
          // 	'CNS_Portfolio_2022.send',
          // 	'event',
          // 	'result',
          // 	'Well done: 4',
          // 	`${pageTitle}`
          // );
          console.log(`${pageTitle}-Test - Well done: 4`);
          break;
        case 3:
        case 2:
          // eslint-disable-next-line no-undef
          // ga(
          // 	'CNS_Portfolio_2022.send',
          // 	'event',
          // 	'result',
          // 	'Not bad: 2-3',
          // 	`${pageTitle}`
          // );
          console.log(`${pageTitle}-Test - Not bad: 2-3`);
          break;
        case 1:
          // eslint-disable-next-line no-undef
          // ga(
          // 	'CNS_Portfolio_2022.send',
          // 	'event',
          // 	'result',
          // 	'Misfortune: 1',
          // 	`${pageTitle}`
          // );
          console.log(`${pageTitle}-Test - Misfortune: 1`);
          break;
        default:
          // eslint-disable-next-line no-undef
          // ga(
          // 	'CNS_Portfolio_2022.send',
          // 	'event',
          // 	'result',
          // 	'Not started : 0 (Error)',
          // 	`${pageTitle}`
          // );
          console.log(`${pageTitle}-Test - Not started : 0 (Error)`);
          break;
      }
    });
  }
}

// NEXT QUESTION BUTTON:
export function nextQuestion() {
  if (document.querySelector('.test')) {
    const progressPoints = document.querySelectorAll('.progress-point');
    const nextButton = document.querySelectorAll('.next-question');
    const pageTitle = document.querySelector('head title').textContent;

    for (let i = 0; i < nextButton.length; i++) {
      nextButton[i].addEventListener('click', (e) => {
        // e.preventDefault();
        if (document.querySelector(`.test${[i + 1]}-result`).style.display === 'block') {
          document.querySelector(`.test${[i + 1]}-result`).style.display = 'none';
          document.querySelector(`.test${[i + 2]}`).style.display = 'block';
          progressPoints[i + 1].classList.add('point-active');
          progressPoints[i].classList.add('point-passed');

          document.querySelector(`.footnote_test${[i + 1]}-answer`).style.display = 'none';
          document.querySelector(`.footnote_test${[i + 2]}-start`).style.display = 'block';

          document.querySelector(`.progress-question-mob`).innerText = `Вопрос ${i + 2}`;
        }

        /* Google Analytics (UA) */
        console.log(`${pageTitle} next_question`);
        // eslint-disable-next-line no-undef
        // ga(
        // 	'CNS_Portfolio_2022.send',
        // 	'event',
        // 	'button',
        // 	'next_question',
        // 	`${pageTitle}`
        // );
      });
    }
  }
}

// RIGHT TEST ANSWER:
export function rightAnswerText(test, testAnswer) {
  if (test.style.display == 'block') {
    testAnswer.children[0].innerText = document.querySelector(
      `.${test.id}-result .${test.id}-good`,
    ).textContent;
    while (testAnswer.children[0].querySelector(`br`)) {
      testAnswer.children[0].removeChild(testAnswer.querySelector(` br`));
    }
  }
}
// WRONG TEST ANSWER:
export function wrongAnswerText(test, testAnswer) {
  if (test.style.display == 'block') {
    testAnswer.children[0].innerText = document.querySelector(
      `.${test.id}-result .${test.id}-bad`,
    ).textContent;
    while (testAnswer.children[0].querySelector(`br`)) {
      testAnswer.children[0].removeChild(testAnswer.querySelector(`br`));
    }
  }
}

/* export function resultGoodInsert(element, testNumber) {
	switch (true) {
		case localStorage.getItem('currentPage') == 'neuropathic1' &&
			testNumber.style.display == 'block':
			// if (testNumber.id == 'test1') {
			// 	element.children[0].innerText = 'Вы правы!';
			// } else if (testNumber.id == 'test2') {
			// 	element.children[0].innerText = 'Вы правы!';
			// } else if (testNumber.id == 'test3') {
			// 	element.children[0].innerText = 'Ответ верный';
			// } else if (testNumber.id == 'test4') {
			// 	element.children[0].innerText = 'Вы абсолютно правы';
			// } else if (testNumber.id == 'test5') {
			// 	element.children[0].innerText = 'Верное решение';
			// } else if (testNumber.id == 'test6') {
			// 	element.children[0].innerText = 'Конечно, это так';
			// }
			element.children[0].innerText = document.querySelector(
				`.${testNumber.id}-result .${testNumber.id}-good`
			).textContent;
			break;
		case localStorage.getItem('currentPage') == 'neuropathic2' &&
			testNumber.style.display == 'block':
			if (testNumber.id == 'test1') {
				element.children[0].innerText = 'Вы правы';
			} else if (testNumber.id == 'test2') {
				element.children[0].innerText = 'Конечно, вы правы';
			} else if (testNumber.id == 'test3') {
				element.children[0].innerText = 'Ответ верный';
			} else if (testNumber.id == 'test4') {
				element.children[0].innerText = 'Вы абсолютно правы';
			} else if (testNumber.id == 'test5') {
				element.children[0].innerText = 'Верное решение';
			} else if (testNumber.id == 'test6') {
				element.children[0].innerText = 'Конечно, это так';
			}
			break;
		case localStorage.getItem('currentPage') == 'neuropathic3' &&
			testNumber.style.display == 'block':
			if (testNumber.id == 'test1') {
				element.children[0].innerText = 'Ответ верный';
			} else if (testNumber.id == 'test2') {
				element.children[0].innerText = 'Вы правы';
			} else if (testNumber.id == 'test3') {
				element.children[0].innerText = 'Ответ верный';
			} else if (testNumber.id == 'test4') {
				element.children[0].innerText = 'Вы абсолютно правы';
			} else if (testNumber.id == 'test5') {
				element.children[0].innerText = 'Конечно, это так';
			}
			break;
		case localStorage.getItem('currentPage') == 'cognitive1' &&
			testNumber.style.display == 'block':
			if (testNumber.id == 'test1') {
				element.children[0].innerText = document.querySelector(
					`.${testNumber.id}-result .${testNumber.id}-good`
				).textContent;
			} else if (testNumber.id == 'test2') {
				element.children[0].innerText = 'Конечно, вы правы';
			} else if (testNumber.id == 'test3') {
				element.children[0].innerText = 'Правильный ответ';
			} else if (testNumber.id == 'test4') {
				element.children[0].innerText = 'Вы абсолютно правы';
			} else if (testNumber.id == 'test5') {
				element.children[0].innerText = 'Конечно, это так';
			}
			break;
	}
} */

/* export function resultBadInsert(element, testNumber) {
	switch (true) {
		case localStorage.getItem('currentPage') == 'neuropathic1' &&
			testNumber.style.display == 'block':
			if (testNumber.id == 'test1') {
				element.children[0].innerText = 'Не совсем так';
			} else if (testNumber.id == 'test2') {
				element.children[0].innerText = 'Не совсем так';
			} else if (testNumber.id == 'test3') {
				element.children[0].innerText = 'Правильным будет другой ответ';
			} else if (testNumber.id == 'test4') {
				element.children[0].innerText = 'Немного не так';
			} else if (testNumber.id == 'test5') {
				element.children[0].innerText = 'К сожалению, вы ошиблись';
			} else if (testNumber.id == 'test6') {
				element.children[0].innerText = 'Ответ неполный';
			}
			break;
		case localStorage.getItem('currentPage') == 'neuropathic2' &&
			testNumber.style.display == 'block':
			if (testNumber.id == 'test1') {
				element.children[0].innerText = 'Не совсем так';
			} else if (testNumber.id == 'test2') {
				element.children[0].innerText = 'К сожалению, неверно';
			} else if (testNumber.id == 'test3') {
				element.children[0].innerText = 'Ответ неверный';
			} else if (testNumber.id == 'test4') {
				element.children[0].innerText = 'Правильным будет другой ответ';
			} else if (testNumber.id == 'test5') {
				element.children[0].innerText = 'К сожалению, неверно';
			} else if (testNumber.id == 'test6') {
				element.children[0].innerText = 'Ответ неполный';
			}
			break;
		case localStorage.getItem('currentPage') == 'neuropathic3' &&
			testNumber.style.display == 'block':
			if (testNumber.id == 'test1') {
				element.children[0].innerText = 'Не совсем так';
			} else if (testNumber.id == 'test2') {
				element.children[0].innerText = 'К сожалению, ошибка';
			} else if (testNumber.id == 'test3') {
				element.children[0].innerText = 'Ответ неверный';
			} else if (testNumber.id == 'test4') {
				element.children[0].innerText = 'Правильным будет другой ответ';
			} else if (testNumber.id == 'test5') {
				element.children[0].innerText = 'Ответ неполный';
			}
			break;
		case localStorage.getItem('currentPage') == 'cognitive1' &&
			testNumber.style.display == 'block':
			if (testNumber.id == 'test1') {
				element.children[0].innerText = 'Ответ неполный';
			} else if (testNumber.id == 'test2') {
				element.children[0].innerText = 'Ответ неполный';
			} else if (testNumber.id == 'test3') {
				element.children[0].innerText = 'Немного не так';
			} else if (testNumber.id == 'test4') {
				element.children[0].innerText = 'Правильным будет другой ответ';
			} else if (testNumber.id == 'test5') {
				element.children[0].innerText = 'Не совсем верно';
			}
			break;
	}
} */

// RIGHT TEST ANSWER ACTION:
export function rightAnswerAction(test, testAnswer) {
  testAnswer.classList.add('green');
  setTimeout(() => {
    test.style.display = 'none';
    document.querySelector(`.${test.id}-result`).style.display = 'block';
    document.querySelector(`.${test.id}-good`).style.display = 'block';
    document.querySelector(`.${test.id}-bad`).style.display = 'none';
    document.querySelector(`.footnote_${test.id}-start`).style.display = 'none';
    document.querySelector(`.footnote_${test.id}-answer`).style.display = 'block';
    /* Scroll to top of the block */
    // const testBlock = document.querySelector('.test');
    // testBlock.scrollIntoView({
    // 	behavior: 'smooth',
    // 	top: 0,
    // });
    document.querySelector('#scrollToTest').click();
  }, 800);
}

// WRONG TEST ANSWER ACTION:
export function wrongAnswerAction(test, testAnswer) {
  testAnswer.classList.add('red');
  setTimeout(() => {
    test.style.display = 'none';
    document.querySelector(`.${test.id}-result`).style.display = 'block';
    document.querySelector(`.${test.id}-good`).style.display = 'none';
    document.querySelector(`.${test.id}-bad`).style.display = 'block';
    document.querySelector(`.footnote_${test.id}-start`).style.display = 'none';
    document.querySelector(`.footnote_${test.id}-answer`).style.display = 'block';
    /* Scroll to top of the block */
    // const testBlock = document.querySelector('.test');
    // testBlock.scrollIntoView({
    // 	behavior: 'smooth',
    // 	top: 0,
    // });
    document.querySelector('#scrollToTest').click();
  }, 800);
}
