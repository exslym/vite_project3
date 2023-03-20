import { resetLocalStorage } from './main';

export default function anchors() {
  window.addEventListener('message', (e) => {
    if (e.data.url) {
      let originalUrl = e.data.url;
      let newHash = originalUrl.replace(/^(.*?#)/, '');
      if (newHash !== originalUrl) {
        resetLocalStorage();
        localStorage.setItem('currentPage', newHash);
      } else {
        console.log('(anchors) no hash');
      }

      console.log(`(anchors) visited page: ${localStorage.getItem('currentPage')}`);
      console.log(`(anchors) right answers: ${+localStorage.getItem('counter')}`);
    } else {
      console.log('local host');
      let localHostUrl = window.location.href;
      let newLocalHostUrl = localHostUrl.replace(/^(.*?#)/, '');
      if (newLocalHostUrl !== localHostUrl) {
        resetLocalStorage();
        localStorage.setItem('currentPage', newLocalHostUrl);
      }

      console.log(`(anchors) visited page: ${localStorage.getItem('currentPage')}`);
      console.log(`(anchors) right answers: ${+localStorage.getItem('counter')}`);
    }
  });
}
