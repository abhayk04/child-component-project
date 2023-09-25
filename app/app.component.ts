import { Component } from '@angular/core';

@Component({
  //mark a class as  a Angular Component
  selector: 'my-app', //identify each component uniquely
  templateUrl: './app.component.html', //returns url from an HTML function
  styleUrls: ['./app.component.css'], //return the style part of the URL
})
export class AppComponent {
  name = 'This is Component 1 ( Parent Component ) Speaking';
}
