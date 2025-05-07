import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('#accordion-container-1', {
  duration: 400,
  showMultiple: false,
  openOnInit: [0],
});
