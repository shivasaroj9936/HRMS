import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `<div class="loader-overlay" [hidden]="!show"><div class="progress">
  <div class="indeterminate"></div></div></div>`,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input('show') show!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
