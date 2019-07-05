import { storiesOf } from '@storybook/html';

storiesOf('Load Spinner', module)
  .add('iOS', () => ` 
    <div class="spin-loader-ios center"> 
      <div class="spinner-blade"></div> 
      <div class="spinner-blade"></div> 
      <div class="spinner-blade"></div> 
      <div class="spinner-blade"></div> 
      <div class="spinner-blade"></div> 
      <div class="spinner-blade"></div> 
      <div class="spinner-blade"></div> 
      <div class="spinner-blade"></div> 
      <div class="spinner-blade"></div> 
      <div class="spinner-blade"></div> 
      <div class="spinner-blade"></div> 
      <div class="spinner-blade"></div> 
    </div>
  `)
  .add('Android', () => `
    <div class="spin-loader-android center"> 
      <div class="circle circle-1"> 
        <div class="circle-inner"></div> 
      </div> 
      <div class="circle circle-2"> 
        <div class="circle-inner"></div> 
      </div> 
    </div> 
  `);