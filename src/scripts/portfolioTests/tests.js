import {
  rightAnswerAction,
  rightAnswerText,
  wrongAnswerAction,
  wrongAnswerText,
} from './testOptions';

export function firstTestBlock() {
  if (document.querySelector('.test')) {
    const testBlocks = document.querySelectorAll('.test__block');
    const progressPoint1 = document.querySelector('.point1');
    const test1 = document.querySelector('.test1');

    testBlocks.forEach((testBlock) => {
      testBlock.style.display = 'none';
    });

    test1.style.display = 'block';
    progressPoint1.classList.add('point-active');
  }
}

// TESTS:
export function portfolioTests() {
  if (document.querySelector('.test')) {
    let counter = 0;
    let startTest = true;

    const tests = document.querySelectorAll('.test__block');
    const testAnswers = document.querySelectorAll('.test__answer');
    const pageTitle = document.querySelector('head title').textContent;

    // FOOTNOTES
    const footnotes = document.querySelectorAll('.footnote');
    const footnote1Start = document.querySelector('.footnote_test1-start');

    footnotes.forEach((footnote) => {
      footnote.style.display = 'none';
    });
    footnote1Start.style.display = 'block';

    // убираем список сокращений из футера на стартовом экране nociceptive1 и возвращаем на первом вопросе:
    const ncStartFootnote = document.querySelector('.ncStartFootnote');
    if (document.querySelector('.wrapper-nociceptive1')) {
      Array.from(ncStartFootnote.children).forEach((item) => {
        item.style.display = 'none';
      });
    }
    if (document.querySelector('.button-help')) {
      const helpButton = document.querySelector('.button-help');
      helpButton.addEventListener('click', () => {
        if (document.querySelector('.wrapper-nociceptive1')) {
          Array.from(ncStartFootnote.children).forEach((item) => {
            item.style.display = 'block';
          });
        }
      });
    }

    // ANSWER CLICKS:
    testAnswers.forEach((testAnswer) => {
      testAnswer.addEventListener('click', function (e) {
        e.preventDefault();
        // Start test:
        // if (startTest === true) {
        // 	console.log(`test_start ${localStorage.getItem('currentPage')}`);
        // 	startTest = false;
        // }

        Array.from(testAnswer.parentNode.children).forEach((answer) => {
          answer.classList.add('button-disabled');
        });
        this.classList.add('checked');

        tests.forEach((test) => {
          if (test.style.display === 'block') {
            if (this.classList.contains('gdansw')) {
              counter += 1;
              rightAnswerText(test, testAnswer);
              rightAnswerAction(test, testAnswer);
              localStorage.setItem('counter', counter);

              /* Google Analytics (UA) */
              console.log(
                `${pageTitle} question_${test.id.replace(/^(.*?test)/, '')} ans_${
                  Array.from(document.querySelectorAll(`.${test.id}__answer`)).indexOf(this) + 1
                }`,
              );
              // eslint-disable-next-line no-undef
              // ga(
              // 	'CNS_Portfolio_2022.send',
              // 	'event',
              // 	`question_${test.id.replace(/^(.*?test)/, '')}`,
              // 	`ans_${
              // 		Array.from(
              // 			document.querySelectorAll(`.${test.id}__answer`)
              // 		).indexOf(this) + 1
              // 	}`,
              // 	`${pageTitle}`
              // );

              console.log(`${pageTitle} question_${test.id.replace(/^(.*?test)/, '')} right`);
              console.log(`right answers: ${counter}`);

              // eslint-disable-next-line no-undef
              // ga(
              // 	'CNS_Portfolio_2022.send',
              // 	'event',
              // 	`question_${test.id.replace(/^(.*?test)/, '')}`,
              // 	`${pageTitle} question_${test.id.replace(
              // 		/^(.*?test)/,
              // 		''
              // 	)} right`,
              // 	`${pageTitle}`
              // );
            } else {
              wrongAnswerText(test, testAnswer);
              wrongAnswerAction(test, testAnswer);
              localStorage.setItem('counter', counter);

              /* Google Analytics (UA) */
              console.log(
                `${pageTitle} question_${test.id.replace(/^(.*?test)/, '')} ans_${
                  Array.from(document.querySelectorAll(`.${test.id}__answer`)).indexOf(this) + 1
                }`,
              );
              console.log(`${pageTitle} question_${test.id.replace(/^(.*?test)/, '')} wrong`);
              console.log(`right answers: ${counter}`);
              // eslint-disable-next-line no-undef
              // ga(
              // 	'CNS_Portfolio_2022.send',
              // 	'event',
              // 	`question_${test.id.replace(/^(.*?test)/, '')}`,
              // 	`ans_${
              // 		Array.from(
              // 			document.querySelectorAll(`.${test.id}__answer`)
              // 		).indexOf(this) + 1
              // 	}`,
              // 	`${pageTitle}`
              // );
              // eslint-disable-next-line no-undef
              // ga(
              // 	'CNS_Portfolio_2022.send',
              // 	'event',
              // 	`question_${test.id.replace(/^(.*?test)/, '')}`,
              // 	`${pageTitle} question_${test.id.replace(
              // 		/^(.*?test)/,
              // 		''
              // 	)} wrong`,
              // 	`${pageTitle}`
              // );
            }
          }
        });

        // switch (true) {
        // 	case test1.style.display == 'block':
        // 		if (this.classList.contains('gdansw')) {
        // 			counter += 1;
        // 			resultGoodInsert(this, test1);
        // 			rightAnswer(test1, 'test1', this, testAnswers);

        // 			console.log(`right answers: ${counter}`);
        // 			console.log(
        // 				`${localStorage.getItem('currentPage')} ${
        // 					test1.id
        // 				} result_correct`
        // 			);
        // 		} else {
        // 			resultBadInsert(this, test1);
        // 			wrongAnswer(test1, 'test1', this, testAnswers);

        // 			console.log(
        // 				`${localStorage.getItem('currentPage')} ${
        // 					test1.id
        // 				} result_wrong`
        // 			);
        // 		}
        // 		break;
        // 	case test2.style.display == 'block':
        // 		if (this.classList.contains('gdansw')) {
        // 			counter += 1;
        // 			resultGoodInsert(this, test2);
        // 			rightAnswer(test2, 'test2', this, testAnswers);

        // 			console.log(`right answers: ${counter}`);
        // 			console.log(
        // 				`${localStorage.getItem('currentPage')} ${
        // 					test2.id
        // 				} result_correct`
        // 			);
        // 		} else {
        // 			resultBadInsert(this, test2);
        // 			wrongAnswer(test2, 'test2', this, testAnswers);

        // 			console.log(
        // 				`${localStorage.getItem('currentPage')} ${
        // 					test2.id
        // 				} result_wrong`
        // 			);
        // 		}
        // 		break;
        // 	case test3.style.display == 'block':
        // 		if (this.classList.contains('gdansw')) {
        // 			counter += 1;
        // 			resultGoodInsert(this, test3);
        // 			rightAnswer(test3, 'test3', this, testAnswers);

        // 			console.log(`right answers: ${counter}`);
        // 			console.log(
        // 				`${localStorage.getItem('currentPage')} ${
        // 					test3.id
        // 				} result_correct`
        // 			);
        // 		} else {
        // 			resultBadInsert(this, test3);
        // 			wrongAnswer(test3, 'test3', this, testAnswers);

        // 			console.log(
        // 				`${localStorage.getItem('currentPage')} ${
        // 					test3.id
        // 				} result_wrong`
        // 			);
        // 		}
        // 		break;
        // 	case test4.style.display == 'block':
        // 		if (this.classList.contains('gdansw')) {
        // 			counter += 1;
        // 			resultGoodInsert(this, test4);
        // 			rightAnswer(test4, 'test4', this, testAnswers);

        // 			console.log(`right answers: ${counter}`);
        // 			console.log(
        // 				`${localStorage.getItem('currentPage')} ${
        // 					test4.id
        // 				} result_correct`
        // 			);
        // 		} else {
        // 			resultBadInsert(this, test4);
        // 			wrongAnswer(test4, 'test4', this, testAnswers);

        // 			console.log(
        // 				`${localStorage.getItem('currentPage')} ${
        // 					test4.id
        // 				} result_wrong`
        // 			);
        // 		}
        // 		break;
        // 	case test5.style.display == 'block':
        // 		if (this.classList.contains('gdansw')) {
        // 			counter += 1;
        // 			resultGoodInsert(this, test5);
        // 			rightAnswer(test5, 'test5', this, testAnswers);
        // 			localStorage.setItem('counter', counter);

        // 			console.log(`right answers: ${counter}`);
        // 			console.log(
        // 				`${localStorage.getItem('currentPage')} ${
        // 					test5.id
        // 				} result_correct`
        // 			);
        // 		} else {
        // 			resultBadInsert(this, test5);
        // 			wrongAnswer(test5, 'test5', this, testAnswers);
        // 			localStorage.setItem('counter', counter);

        // 			console.log(
        // 				`${localStorage.getItem('currentPage')} ${
        // 					test5.id
        // 				} result_wrong`
        // 			);
        // 		}
        // 		break;
        // 	case test6.style.display == 'block':
        // 		if (this.classList.contains('gdansw')) {
        // 			counter += 1;
        // 			resultGoodInsert(this, test6);
        // 			rightAnswer(test6, 'test6', this, testAnswers);
        // 			localStorage.setItem('counter', counter);

        // 			console.log(`right answers: ${counter}`);
        // 			console.log(
        // 				`${localStorage.getItem('currentPage')} ${
        // 					test6.id
        // 				} result_correct`
        // 			);
        // 		} else {
        // 			resultBadInsert(this, test6);
        // 			wrongAnswer(test6, 'test6', this, testAnswers);
        // 			localStorage.setItem('counter', counter);

        // 			console.log(
        // 				`${localStorage.getItem('currentPage')} ${
        // 					test6.id
        // 				} result_wrong`
        // 			);
        // 		}
        // 		break;
        // }
      });
    });
  }
}
