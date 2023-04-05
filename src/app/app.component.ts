import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader-service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  showLoader = false;

  title = 'HRMS';
  constructor( private loaderService:LoaderService){

  }
  ngOnInit(): void {
    this.loaderService.loading$.subscribe((data)=>{
      setTimeout(()=>{
        this.showLoader=false;
      },0)
    })
  }
}
