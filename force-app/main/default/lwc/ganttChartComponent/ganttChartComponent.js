
// import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
// import REACT_APP from '@salesforce/resourceUrl/ReactGanttChartStaticResource';  // Static resource name

// export default class GanttChartComponent extends LightningElement {
//   initialized = false;

//   renderedCallback() {
//     if (!this.initialized) {
//       // Load React app's JS and CSS from Static Resources
//       loadScript(this, REACT_APP + '/js/main.56129a4a.js') // Adjust according to your build file names
//         .then(() => {
//           const container = this.template.querySelector('.gantt-container');
//           // Optional: Append CSS if needed
//           loadStyle(this, REACT_APP + '/static/css/main.e6c13ad2.css'); 
//           this.initialized = true;
//         })
//         .catch((error) => {
//           console.error('Error loading React app:', error);
//         });
//     }
//   }
// }

import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import REACT_APP from '@salesforce/resourceUrl/ReactGanttChartStaticResource';  // Static resource URL

export default class GanttChartComponent extends LightningElement {
  initialized = false;

  renderedCallback() {
    if (!this.initialized) {
      // Load the React app's JavaScript file from Static Resources
      loadScript(this, REACT_APP + '/js/main.56129a4a.js')
        .then(() => {
          console.log('React app loaded');
          const container = this.template.querySelector('.gantt-container');
          const script = document.createElement('script');
          script.src = REACT_APP + '/js/main.56129a4a.js';  // Reference the correct JS path
          container.appendChild(script);
          this.initialized = true;
        })
        .catch((error) => {
          console.error('Error loading React app:', error);
        });
    }
  }
}
