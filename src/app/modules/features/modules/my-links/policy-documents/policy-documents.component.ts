import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-policy-documents',
  templateUrl: './policy-documents.component.html',
  styleUrls: ['./policy-documents.component.scss']
})
export class PolicyDocumentsComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: '#', key: 's_no', isSortable: '', type: 'text', },
    { heading: "Name", key: 'name', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Type", key: 'doc_type', isSortable: '', type: 'text', link: 'client-details' },
    { heading: 'File Size', key: 'doc_size', isSortable: '', type: 'text', },
    { heading: 'Last Modified', key: 'last_modification', isSortable: '', type: 'text', },
    { heading: 'Action', key: 'action', type: 'action', action: [{}] },
  ]
  Table_DATA: any[] = [
    { s_no: 1, name: 'abce', doc_type: '1gfdsasdfg', doc_size: 'qwe', last_modification: 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": [ {icon:'download',link:'https://dashboard.appinventiv.com/admin/repository/file-download?file=uploads/hr/policy/Appinventiv_Policy_Manual.pdf'}] },
    { s_no: 2, name: 'abcd', doc_type: '3gfdsasdfg', doc_size: 'qwe', last_modification: 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": [ {icon:'download',link:'/assets/applogo.png'}] },
    { s_no: 3, name: 'abcd', doc_type: '5gfdsasdfg', doc_size: 'qwe', last_modification: 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": [ {icon:'download',link:'/assets/bday1.jpeg'}] },
    { s_no: 4, name: 'abch', doc_type: '6gfdsasdfg', doc_size: 'qwe', last_modification: 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": [ {icon:'download',link:'/assets/bday4.jpeg'}] },
    { s_no: 5, name: 'abch', doc_type: '6gfdsasdfg', doc_size: 'qwe', last_modification: 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": [ {icon:'download',link:'/assets/user1.jpeg'}] },
  ]

  constructor() { 
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }


  ngOnInit(): void {
  }

}
