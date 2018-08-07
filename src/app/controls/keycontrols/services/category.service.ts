/**
 * This file should contains all service calls to category dropdown
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appConstants } from '../../../core/constants/appConstants';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SelectItem } from 'primeng/api';
import { environment } from '../../../../environments/environment';


@Injectable()
export class CategoryService {
  private serverURL = environment.serverUrl + '/internalcontrolservice/listCategory';

  constructor(private httpClient: HttpClient) { }

  /* This method will get the data of category dropdown */
  getCategory() {
    return this.httpClient
      .get(this.serverURL, appConstants.getHeaderOptions).map((categories: SelectItem[]) => {
        const categoriesList = [];
        for (const category of categories) {
          categoriesList.push({ 'label': category['categoryName'], 'value': category['categoryId'] });
        }
        return categoriesList;
      });

  }
}
