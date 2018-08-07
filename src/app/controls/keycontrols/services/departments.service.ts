/**
 * This file should contains all service calls to departments
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../../environments/environment';
import { appConstants } from '../../../core/constants/appConstants';
import { SelectItem } from 'primeng/api';


@Injectable()
export class DepartmentsService {
  private serverURL = environment.serverUrl + '/internalcontrolservice/listDepartments';

  constructor(private httpClient: HttpClient) { }

  /* This method will get the data of departments dropdown */
  getDepartments() {
    return this.httpClient
      .get(this.serverURL, appConstants.getHeaderOptions).map((departments: SelectItem[]) => {
        const departmentList = [];
        for (const department of departments) {
          departmentList.push({ 'label': department['departmentName'], 'value': department['departmentId'] });
        }
        return departmentList;
      });

  }

}
