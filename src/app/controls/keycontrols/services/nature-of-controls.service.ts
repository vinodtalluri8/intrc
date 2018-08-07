/**
 * This file should contains all service calls natire if controls
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SelectItem } from 'primeng/api';
import { environment } from '../../../../environments/environment';
import { appConstants } from '../../../core/constants/appConstants';

@Injectable()
export class NatureOfControlsService {
  private serverURL = environment.serverUrl + '/internalcontrolservice/listNatureOfControls';
  constructor(private httpClient: HttpClient) { }

  /* This method will get the data of Nature of Controls dropdown */
  getNatureOfControls() {
    return this.httpClient
      .get(this.serverURL, appConstants.getHeaderOptions).map((natureOfControls: SelectItem[]) => {
        const natureOfControlsList: any = [];
        for (const natureOfControl of natureOfControls) {
          natureOfControlsList.push({ 'label': natureOfControl['natureControl'], 'value': natureOfControl['natureId'] });
        }
        return natureOfControlsList;
      });
  }
}
