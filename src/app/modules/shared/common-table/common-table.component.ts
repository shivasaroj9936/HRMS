import { Component,  Input, OnInit, Output, ViewChild ,EventEmitter} from '@angular/core';
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
  today= new Date();
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
  @Input() searchFilter=false;

  @Input() heading:string='';

  @Input() columns!: any;
  @Input() dataSourceForTable!: any;
  @Input() paginationSizes: number[] = [2,5, 10];
  @Input() defaultPageSize = this.paginationSizes[1];

  @ViewChild(MatPaginator, { static: false }) matPaginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) matSort!: MatSort;

  @Input() set pageSize(size: any) {
    if (size) {
      this.matPaginator?._changePageSize(size);
    }
  }

  constructor(public sanitizer:DomSanitizer ) { }


  ngOnInit(): void {
    this.columns.map((tableColumn: any) => this.headerRow.push(tableColumn.heading));
    // console.log(this.today);
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceForTable.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceForTable.paginator) {
      this.dataSourceForTable.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    this.dataSourceForTable.sort = this.matSort;
    this.dataSourceForTable.paginator = this.matPaginator;

  }

  action(item:any,index:any){

    this.newItemEvent.emit({item,index})

  }
}




// -----------------------------to refactor------------------------






// import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
// import { DomSanitizer } from '@angular/platform-browser';

// @Component({
//   selector: 'app-common-table',
//   templateUrl: './common-table.component.html',
//   styleUrls: ['./common-table.component.scss']
// })
// export class CommonTableComponent implements OnInit {
//   @Output() newItemEvent = new EventEmitter<any>();
//   headerRow: any = [];
//   data = {
//     Module: '',
//     typeOfPopUp: '',
//     acceptLabel: '',
//     warning: '',
//     rejectLable: '',
//   }

//   testPaginator = {
//     length: 1000,
//     pageSize: 10,
//     pageIndex: 1
//   };
//   @Input() pagination = false;
//   @Input() searchFilter = false;

//   @Input() heading: string = '';

//   @Input() columns!: any;
//   @Input() dataSourceForTable!: any;
//   @Input() paginationSizes: number[] = [2, 5, 10];
//   @Input() defaultPageSize = this.paginationSizes[1];

//   @ViewChild(MatPaginator, { static: false }) matPaginator!: MatPaginator;
//   @ViewChild(MatSort, { static: true }) matSort!: MatSort;

//   @Input() set pageSize(size: any) {
//     if (size) {
//       this.matPaginator?._changePageSize(size);
//     }
//   }

//   dataSource!: MatTableDataSource<any>;

//   @Input() set tableDataNew(data: any) {
//     console.log(data);
    
//     if (data) {
//       this.dataSource = new MatTableDataSource<any>(data);
//       this.dataSource._updateChangeSubscription()

//     }
//   }

//   constructor(public sanitizer: DomSanitizer) { }


//   ngOnInit(): void {
//     this.columns.map((tableColumn: any) => this.headerRow.push(tableColumn.heading));
//   }
//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }

//   ngAfterViewInit() {
//     if (this.dataSource) {

//       this.dataSource.sort = this.matSort;
//       this.dataSource.paginator = this.matPaginator;
//     }

//   }

//   action(item: any, index: any) {

//     this.newItemEvent.emit({ item, index })

//   }
// }


















