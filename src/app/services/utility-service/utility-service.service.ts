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
    designation:'Software Engineer'
  }
}
