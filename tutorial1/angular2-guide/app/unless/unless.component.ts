import {Component} from 'angular2/core';
import {UnlessDirective} from './unless.directive';

@Component({
  selector: 'my-unless',
  template: `
  <p *myUnless="condition">
  condition is false and myUnless is true.
	</p>

	<p *myUnless="!condition">
	  condition is true and myUnless is false.
	</p>
`,
  directives: [UnlessDirective]
})
export class UnlessComponent { 
	public condition:boolean = false
}
