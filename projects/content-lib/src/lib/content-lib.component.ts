import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-content-lib',
  template: `
    <p>
      Hello content-lib works!
    </p>
  `,
  styles: []
})
export class ContentLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
