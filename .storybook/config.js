import { configure } from '@storybook/html';
import '../css/styles.css';

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);