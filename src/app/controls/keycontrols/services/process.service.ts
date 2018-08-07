/**
 * This file should contains all service calls to process
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SelectItem } from 'primeng/api';
import { environment } from '../../../../environments/environment';
import { appConstants } from '../../../core/constants/appConstants';


@Injectable()
export class ProcessService {
  constructor(private httpClient: HttpClient) { }
  private serverURL = environment.serverUrl + '/internalcontrolservice/listProcess';

  /* This method will get the data of Process dropdown */
  getProcess() {
    return this.httpClient.get(this.serverURL, appConstants.getHeaderOptions).map((processes: SelectItem[]) => {
      const processList = [];
      for (const process of processes) {
        processList.push({ 'label': process['processName'], 'value': process['processId'] });
      }
      return processList;
    });
  }

}
