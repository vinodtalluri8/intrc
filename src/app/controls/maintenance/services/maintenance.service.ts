import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MaintenanceService {
dropdownUrl = 'http://localhost:4200/data/dropdown-mock.json';
multiDropdownUrl = 'http://localhost:4200/data/multiDropdown-mock.json';
  constructor(private httpClient: HttpClient) { }
  getDropdownData() {
    return this.httpClient.get(this.dropdownUrl);
  }
  getMultiDropdownData() {
    return this.httpClient.get(this.multiDropdownUrl);
  }

}
