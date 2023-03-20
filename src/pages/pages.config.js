import { resolve } from 'path';

const pages = [
  { name: 'main', path: resolve(__dirname, '../index.html') },
  { name: 'cognitive1', path: resolve(__dirname, '../cognitive1.html') },
  { name: 'cognitive2', path: resolve(__dirname, '../cognitive2.html') },
  { name: 'cognitive3', path: resolve(__dirname, '../cognitive3.html') },
  { name: 'neuropathic1', path: resolve(__dirname, '../neuropathic1.html') },
  { name: 'neuropathic2', path: resolve(__dirname, '../neuropathic2.html') },
  { name: 'neuropathic3', path: resolve(__dirname, '../neuropathic3.html') },
  { name: 'nociceptive1', path: resolve(__dirname, '../nociceptive1.html') },
  { name: 'nociceptive2', path: resolve(__dirname, '../nociceptive2.html') },
  { name: 'nociceptive3', path: resolve(__dirname, '../nociceptive3.html') },
  { name: 'resultpage', path: resolve(__dirname, '../resultpage.html') },
];

export default pages;
