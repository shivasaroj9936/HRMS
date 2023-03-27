import { AfterContentChecked, ChangeDetectorRef, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnInit, AfterContentChecked{
[x: string]: any;

// @ViewChild('subNav') subNav: any;

@ViewChild('subNav', {static: false}) subNav!: any;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  ngAfterContentChecked() {
    this.cdr.detectChanges();
}
}
