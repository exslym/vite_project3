export default function resultPage() {
  if (document.querySelector('.wrapper-result-page')) {
    console.log(`(resultPage) visited page: ${localStorage.getItem('currentPage')}`);
    console.log(`(resultPage) right answers: ${+localStorage.getItem('counter')}`);

    const button1 = document.querySelector('.result__drugs_button1');
    const button2 = document.querySelector('.result__drugs_button2');
    const button3 = document.querySelector('.result__drugs_button3');
    const button4 = document.querySelector('.result__drugs_button4');
    const button5 = document.querySelector('.result__drugs_button5');
    const drugScheme = document.querySelector('.result__drugs');
    const drugButtons = document.querySelectorAll('.drugs-button');
    const drugDescr = document.querySelectorAll('.result__description');
    const footnotes = document.querySelectorAll('.footnote');
    const regNumbers = document.querySelectorAll('.regNumber');

    drugDescr.forEach((item) => {
      item.style.display = 'none';
    });
    footnotes.forEach((footnote) => {
      footnote.style.display = 'none';
    });
    regNumbers.forEach((number) => {
      number.style.display = 'none';
    });

    const dataUpdate = (element) => {
      element.children[0].classList.add('active-btn');
      document.querySelector(`.${element.dataset.label}`).style.display = 'block';
      document.querySelector(`.footnote-${element.dataset.label}`).style.display = 'block';
      document.querySelector(`.regNumber-${element.dataset.label}`).style.display = 'block';
    };

    // Клики по кнопкам препаратов:
    drugButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (button.children[0].classList.contains('active-btn')) {
          drugDescr.forEach((item) => {
            item.style.display = 'none';
          });
          footnotes.forEach((footnote) => {
            footnote.style.display = 'none';
          });
          regNumbers.forEach((number) => {
            number.style.display = 'none';
          });

          dataUpdate(button);
        } else {
          drugButtons.forEach((button) => {
            button.children[0].classList.remove('active-btn');
            drugDescr.forEach((item) => {
              item.style.display = 'none';
            });
            footnotes.forEach((footnote) => {
              footnote.style.display = 'none';
            });
            regNumbers.forEach((number) => {
              number.style.display = 'none';
            });
          });

          dataUpdate(button);

          /* Google Analytics (UA) */
          // eslint-disable-next-line no-undef
          // ga(
          // 	'CNS_Portfolio_2022.send',
          // 	'event',
          // 	'button',
          // 	'click',
          // 	`${button.dataset.name}`
          // );
          console.log(`${button.dataset.name}_button`);
        }
      });
    });

    // Содержимое заголовка в зависимости от успешности прохождения теств, а также ссылки на документы после прохождения соответствующего теста:
    const resultHeader = document.querySelector('.result-header');
    const resultText = document.querySelector('.result-text');
    const resultButtonDownload = document.querySelector('.result-button-download');

    switch (localStorage.getItem('currentPage')) {
      case 'neuropathic1':
        switch (+localStorage.getItem('counter')) {
          case 6:
          case 5:
            resultHeader.innerText = 'Поздравляем, Вы\u00A0превосходно прошли курс терапии ДПН!';
            break;
          case 4:
            resultHeader.innerText =
              'Поздравляем, Вы\u00A0успешно\u00A0прошли курс\u00A0терапии ДПН!';
            break;
          case 3:
          case 2:
            resultHeader.innerText = 'Вы\u00A0неплохо справились с\u00A0вопросами!';
            break;
          case 1:
          case 0:
            resultHeader.innerText = 'Неудача, но\u00A0дальше может\u00A0быть лучше!';
            break;
          default:
            resultHeader.innerText = 'Вы\u00A0не\u00A0проходили курс терапии ДПН!';
            break;
        }
        resultText.innerHTML =
          'Скачайте статью для\u00A0изучения\u00A0\u2014 </br>В.А.\u00A0Парфенов, М.В.\u00A0Коняшова \u00ABТерапия болевой диабетической невропатии\u00BB';
        resultButtonDownload.href =
          'docs/Treatment_of_painful_diabetic_neuropathy_V_A_Parfenov, M_V_Konyashova.pdf';
        resultButtonDownload.dataset.name = `Parfenov_${localStorage.getItem('currentPage')}`;
        dataUpdate(button2);
        break;

      case 'neuropathic2':
        switch (+localStorage.getItem('counter')) {
          case 6:
          case 5:
            resultHeader.innerText = 'Поздравляем, Вы\u00A0превосходно прошли курс терапии ПГН!';
            break;
          case 4:
            resultHeader.innerText =
              'Поздравляем, Вы\u00A0успешно\u00A0прошли курс\u00A0терапии ПГН!';
            break;
          case 3:
          case 2:
            resultHeader.innerText = 'Вы\u00A0неплохо справились с\u00A0вопросами!';
            break;
          case 1:
          case 0:
            resultHeader.innerText = 'Неудача, но\u00A0дальше может\u00A0быть лучше!';
            break;
          default:
            resultHeader.innerText = 'Вы\u00A0не\u00A0проходили курс терапии ПГН!';
            break;
        }
        resultText.innerHTML =
          'Полезный материал для Вас\u00A0\u2014 <br/><strong>карта дозирования Нейронтин</strong><sup>&reg;</sup>';
        resultButtonDownload.href = 'docs/Brochure_Neirontin_2022_scheme.pdf';
        resultButtonDownload.dataset.name = `dozkarta_${localStorage.getItem('currentPage')}`;
        dataUpdate(button1);
        break;

      case 'neuropathic3':
        switch (+localStorage.getItem('counter')) {
          case 5:
            resultHeader.innerText =
              'Поздравляем, Вы\u00A0превосходно прошли курс терапии радикулопатии!';
            break;
          case 4:
            resultHeader.innerText =
              'Поздравляем, Вы\u00A0успешно\u00A0прошли курс\u00A0терапии радикулопатии!';
            break;
          case 3:
          case 2:
            resultHeader.innerText = 'Вы\u00A0неплохо справились с\u00A0вопросами!';
            break;
          case 1:
          case 0:
            resultHeader.innerText = 'Неудача, но\u00A0дальше может\u00A0быть лучше!';
            break;
          default:
            resultHeader.innerText = 'Вы\u00A0не\u00A0проходили курс терапии радикулопатии!';
            break;
        }
        resultText.innerHTML =
          'Полезный материал для Вас\u00A0\u2014 </br><strong>карта дозирования Нейронтин</strong><sup>&reg;</sup>';
        resultButtonDownload.href = 'docs/Brochure_Neirontin_2022_scheme.pdf';
        resultButtonDownload.dataset.name = `dozkarta_${localStorage.getItem('currentPage')}`;
        dataUpdate(button1);
        break;
      case 'cognitive1':
      case 'cognitive2':
      case 'cognitive3':
        switch (+localStorage.getItem('counter')) {
          case 6:
          case 5:
            resultHeader.innerText =
              'Поздравляем, Вы\u00A0превосходно прошли курс\u00A0терапии когнитивных расстройств!';
            break;
          case 4:
            resultHeader.innerText =
              'Поздравляем, Вы\u00A0успешно\u00A0прошли курс\u00A0терапии когнитивных расстройств!';
            break;
          case 3:
          case 2:
            resultHeader.innerText = 'Вы\u00A0неплохо справились с\u00A0вопросами!';
            break;
          case 1:
          case 0:
            resultHeader.innerText = 'Неудача, но\u00A0дальше может\u00A0быть лучше!';
            break;
          default:
            resultHeader.innerText =
              'Вы\u00A0не\u00A0проходили курс\u00A0терапии когнитивных расстройств!';
            break;
        }
        resultText.style.fontWeight = '400';
        resultText.innerHTML =
          'Полезный материал для Вас\u00A0\u2014 COVID\u2011ассоциированные когнитивные нарушения\u00A0\u2014 научная статья И.С.\u00A0Преображенской';
        resultButtonDownload.href = 'docs/Preobrazhenskaya.pdf';
        resultButtonDownload.dataset.name = `Preobrazh_${localStorage.getItem('currentPage')}`;
        dataUpdate(button5);
        break;
      case 'nociceptive1':
        switch (+localStorage.getItem('counter')) {
          case 6:
          case 5:
            resultHeader.innerText =
              'Поздравляем, Вы\u00A0превосходно прошли курс\u00A0терапии остеохондроза!';
            break;
          case 4:
            resultHeader.innerText =
              'Поздравляем, Вы\u00A0успешно\u00A0прошли курс\u00A0терапии остеохондроза!';
            break;
          case 3:
          case 2:
            resultHeader.innerText = 'Вы\u00A0неплохо справились с\u00A0вопросами!';
            break;
          case 1:
          case 0:
            resultHeader.innerText = 'Неудача, но\u00A0дальше может\u00A0быть лучше!';
            break;
          default:
            resultHeader.innerText = 'Вы\u00A0не\u00A0проходили курс\u00A0терапии остеохондроза!';
            break;
        }
        resultText.classList.add('celebrex-result1');
        resultText.innerHTML =
          '<strong>Неспецифическая боль в\u00A0спине</strong> Современные подходы к\u00A0применению НПВП и\u00A0хондропротекторов у\u00A0пациентов с\u00A0дегенеративно\u2011дистрофическими </br>изменениями позвоночника';
        resultButtonDownload.href = 'docs/Nonspecific_back_pain.pdf';
        resultButtonDownload.dataset.name = `Celeb-recom_${localStorage.getItem('currentPage')}`;
        dataUpdate(button3);
        break;
      case 'nociceptive2':
        switch (+localStorage.getItem('counter')) {
          case 6:
          case 5:
            resultHeader.innerText =
              'Поздравляем, Вы\u00A0превосходно прошли курс\u00A0терапии остеоартрита!';
            break;
          case 4:
            resultHeader.innerText =
              'Поздравляем, Вы\u00A0успешно\u00A0прошли курс\u00A0терапии остеоартрита!';
            break;
          case 3:
          case 2:
            resultHeader.innerText = 'Вы\u00A0неплохо справились с\u00A0вопросами!';
            break;
          case 1:
          case 0:
            resultHeader.innerText = 'Неудача, но\u00A0дальше может\u00A0быть лучше!';
            break;
          default:
            resultHeader.innerText = 'Вы\u00A0не\u00A0проходили курс\u00A0терапии остеоартрита!';
            break;
        }
        resultText.classList.add('celebrex-result2');
        resultText.innerHTML = 'Алгоритм лечения остеоартрита </br>(ESCEO\u20112019)';
        resultButtonDownload.href = 'docs/ESCEO_algorithm_2019.pdf';
        resultButtonDownload.dataset.name = `ESCEO_${localStorage.getItem('currentPage')}`;
        dataUpdate(button3);
        break;
      case 'nociceptive3':
        switch (+localStorage.getItem('counter')) {
          case 6:
          case 5:
            resultHeader.innerText =
              'Поздравляем, Вы\u00A0превосходно прошли курс\u00A0терапии остеоартрита!';
            break;
          case 4:
            resultHeader.innerText =
              'Поздравляем, Вы\u00A0успешно\u00A0прошли курс\u00A0терапии остеоартрита!';
            break;
          case 3:
          case 2:
            resultHeader.innerText = 'Вы\u00A0неплохо справились с\u00A0вопросами!';
            break;
          case 1:
          case 0:
            resultHeader.innerText = 'Неудача, но\u00A0дальше может\u00A0быть лучше!';
            break;
          default:
            resultHeader.innerText = 'Вы\u00A0не\u00A0проходили курс\u00A0терапии остеоартрита!';
            break;
        }
        resultText.style.fontWeight = '500';
        resultText.style.fontSize = 'var(--fz20)';
        resultText.innerHTML =
          'Место Целебрекса в\u00A0алгоритме применения\u00A0НПВП, </br>согласно клиническим рекомендациям';
        resultButtonDownload.href = 'docs/Celebrex_recomendations.pdf';
        resultButtonDownload.dataset.name = `Celeb-recom_${localStorage.getItem('currentPage')}`;
        dataUpdate(button3);
        break;
    }
  }
}
