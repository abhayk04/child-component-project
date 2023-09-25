import { Component, Input } from '@angular/core';

@Component({
  selector: 'child-component',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class ChildComponent {
  @Input() name: string; //import value from parent compoenent to this child conmponent
}
