import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button class='btn btn-primary' (click)='valueChanged()'>Click me</button>`
})
export class AppChildComponent implements OnInit {

	@Output() 
	valueChange = new EventEmitter();

	counter: number = 0;

	constructor() { }

	ngOnInit() {
	}

	valueChanged() {
		this.counter = this.counter + 1;
		this.valueChange.emit(this.counter);
	}
}
