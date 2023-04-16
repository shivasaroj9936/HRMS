import { Injectable } from '@angular/core';
import { USERDATA } from 'src/app/modules/features/modules/dashboard/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {

  constructor() { }

  userData:USERDATA={
    name:'Shiva Saroj',
    dob : '16/05/1999',
    gender:'male',
    email:'shiva.saroj@appinventiv.com',
    emp_id:'AI 1580',
    last_login:' Feb-01-2023 12:25 PM from 172.31.25.47',
    designation:'Software Engineer',
    technology:'Angular'
  }


  dsrList: any[] = [{
    s_no: 1, type: 'text', isSortable: 'sortable', action: [{ icon: '', btnStyle: 'btn_add_new', btnText: 'pending', route: 'DSR_DETAILS', type: 'route', routeID: 121 }], emp_name: 'Shiva Saroj', email: 'shiva.saroj@appinventiv.com', employment_type: 'Permanent',
    date: '31/02/2022', logged_hr: '08:00', level_1: '	Suyash Saxena(AI057)', level_2: 'HR (Human Resourse)'
  },
  {
    s_no: 2, type: 'text', isSortable: 'sortable', action: [{ icon: '', btnStyle: 'btn_add_new', btnText: 'pending', route: 'DSR_DETAILS', type: 'route', routeID: 121 }], emp_name: 'Shiva Saroj', email: 'shiva.saroj@appinventiv.com', employment_type: 'Permanenet',
    date: '21/03/2022', logged_hr: '08:00', level_1: '	Suyash Saxena(AI057)', level_2: 'HR (Human Resourse)'
  },
  {
    s_no: 3, type: 'text', isSortable: 'sortable', action: [{ icon: '', btnStyle: 'btn_add_new', btnText: 'pending', route: 'DSR_DETAILS', type: 'route', routeID: 121 }], emp_name: 'Shiva Saroj', email: 'shiva.saroj@appinventiv.com', employment_type: 'Permanent',
    date: '10/04/2022', logged_hr: '08:00', level_1: '	Suyash Saxena(AI057)', level_2: 'HR (Human Resourse)'
  }
  ]
}
