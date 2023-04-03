import { Component,  Input, OnInit, Output, ViewChild ,EventEmitter} from '@angular/core';
import { MatDialog,  } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<any>();
  headerRow: any = [];
  data = {
    Module: '',
    typeOfPopUp: '',
    acceptLabel: '',
    warning: '',
    rejectLable: '',
  }

  testPaginator = {
    length: 1000,
    pageSize: 10,
    pageIndex: 1
  };
  @Input() pagination=false;
  @Input() heading:string='';

  @Input() columns!: any;
  @Input() dataSourceForTable!: any;
  @Input() paginationSizes: number[] = [5, 10, 15, 23];
  @Input() defaultPageSize = this.paginationSizes[1];

  @ViewChild(MatPaginator, { static: false }) matPaginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) matSort!: MatSort;

  @Input() set pageSize(size: any) {
    if (size) {
      this.matPaginator._changePageSize(size);
    }
  }

  constructor(public sanitizer:DomSanitizer,
   
    ) { }


  ngOnInit(): void {
    this.columns.map((tableColumn: any) => this.headerRow.push(tableColumn.heading));
  }
  ngAfterViewInit() {
    this.dataSourceForTable.sort = this.matSort;
    this.dataSourceForTable.paginator = this.matPaginator;
    
  }

  action(item:any,index:any){

    this.newItemEvent.emit({item,index})
    
  }
}
