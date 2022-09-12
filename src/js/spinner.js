import { Spinner } from 'spin.js';
import 'spin.js/spin.css';

const spinnerConfigs = {
  lines: 15, // The number of lines to draw
  length: 13, // The length of each line
  width: 29, // The line thickness
  radius: 22, // The radius of the inner circle
  scale: 1.65, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1.2, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-shrink', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#FF6B01', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50vh', // Top position relative to parent
  left: '50vw', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};

export const spinner = new Spinner(spinnerConfigs);
