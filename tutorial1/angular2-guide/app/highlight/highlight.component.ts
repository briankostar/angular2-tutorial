import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive';

@Component({
  selector: 'my-app',
  template: `<h1>My First Attribute Directive</h1>
			<span myHighlight>Highlight me!</span>
			<div myHighlight>second highlight</div>

			<input type="radio" name="colors" (click)="color='lightgreen'">Green
			  <input type="radio" name="colors" (click)="color='yellow'">Yellow
			  <input type="radio" name="colors" (click)="color='cyan'">Cyan
			  <p [myHighlight]="color" [defaultColor]="'blue'">Highlight me!</p>
`,
  directives: [HighlightDirective]
})
export class HighlightComponent { }
