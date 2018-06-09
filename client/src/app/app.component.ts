import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	messages = [
		{date:new Date(), text:'Hi!', from:'Sergei'}
	];
}
