import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-child (valueChange)='displayCounter($event)'></app-child>`
})
export class AppComponent implements OnInit {
  title = 'intro-emmiter';

  ngOnInit() {

  }

  displayCounter(count){
  	console.log(count);
  }
}
