import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';
  
OverlayScrollbars({ 
  target: document.querySelector('body'),
  cancel: {
    nativeScrollbarsOverlaid: true,
  }
}, {
  paddingAbsolute: false,
  showNativeOverlaidScrollbars: true,
  update: {
    elementEvents: [
      ['img', 'load']
    ],
    debounce: [0, 33],
    attributes: null,
    ignoreMutation: null,
  },
  overflow: {
    x: 'hidden',
    y: 'scroll',
  },
  scrollbars: {
    theme: 'os-theme-light',
    visibility: 'auto',
    autoHide: 'scroll',
    autoHideDelay: 1000,
    dragScroll: true,
    clickScroll: false,
    pointers: ['mouse', 'pen'],
  },
 });