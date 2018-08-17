import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { MenuItem, SelectItem, Message } from 'primeng/api';
import { appConstants } from '../../../core/constants/appConstants';

@Injectable()
export class MatrixService {
private userDefaultserverURL;
private groupserverURL;
private businessFuntionURL;
private matrixTypeURL;
private certificationResponsibilityURL;
private inherentRiskRatingURL;
private controlRiskRatingURL;
private evetTypeURL;
private driverCategoryURL;
private applicableToURL;
private enhancementProjectURL;
private relatedTechnologyURL;
private frameworkURL;
private checklistURL;
private controlURL;
private sourceURL;
private relatedSystemURL;
private matrixName = 'New Matrix';
dataJson;
dropdownUrl = 'http://localhost:4200/data/dropdown-mock.json';
multiDropdownUrl = 'http://localhost:4200/data/multiDropdown-mock.json';
  constructor(private httpClient: HttpClient) { }
  getMatrixData() {
    return this.httpClient.get(this.dropdownUrl);
  }
  getMatrixMultiSelect() {
    return this.httpClient.get(this.multiDropdownUrl);
  }
  setMatrixName(data) {
    this.matrixName = data;
  }
  getMatrixName() {
    return this.matrixName;
  }
  /** General Matrix information **/

  getDefaultGroup() {
    this.userDefaultserverURL = environment.serverUrl + 'checklist/userDefaultGroup';
   /// appConstants.getHeaderOptions.params = new HttpParams().set('loginId', 'bhat_v');
    return this.httpClient
      .get(this.userDefaultserverURL, appConstants.getHeaderOptions).map((defaultgroup: SelectItem[]) => {
        const defaultgroupList: any = [];
        for (const item of defaultgroup) {
          defaultgroupList.push({ 'label': item['departmentName'], 'value': item['departmentName'] });
        }
        return defaultgroup;
      });
  }

  getGroup(value?) {
    this.groupserverURL = environment.serverUrl + 'checklist/groupList';
  //  appConstants.getHeaderOptions.params = new HttpParams().set('loginId', 'Chuprin_a');
    return this.httpClient
      .get(this.groupserverURL, appConstants.getHeaderOptions).map((groups: SelectItem[]) => {
        const groupsList: any = [];
        for (const group of groups) {
          groupsList.push({ 'label': group['departmentName'], 'value': group['departmentName'] });
        }
        return groupsList;
      });

  }

  getBusinessFunction() {
    this.businessFuntionURL = environment.serverUrl + 'internalControl/getBusinessFunction';
    return this.httpClient.get(this.businessFuntionURL, appConstants.getHeaderOptions).
      map((getbusinessFunction: SelectItem[]) => {
        const businessFunctionList: any = [];
        for (const item of getbusinessFunction) {
              businessFunctionList.push({ 'label': item['id'], 'value': item['value'] });
                 }
        return businessFunctionList;
      });
  }

  getMatrixType() {
    this.matrixTypeURL = environment.serverUrl + 'internalControl/getMatrixType';
    return this.httpClient.get(this.matrixTypeURL, appConstants.getHeaderOptions).
      map((getMatrixType: SelectItem[]) => {
        const matrixTypeList: any = [];
        for (const item of getMatrixType) {
          matrixTypeList.push({ 'label': item['id'], 'value': item['value'] });
                 }
        return matrixTypeList;
      });
  }

  getCertificationResponsibility() {
    this.certificationResponsibilityURL = environment.serverUrl + 'internalControl/getCertificationResponsibilty';
    return this.httpClient.get(this.certificationResponsibilityURL, appConstants.getHeaderOptions).
      map((getCertificationResponsibility: SelectItem[]) => {
        const certificationResponsibilityList: any = [];
        for (const item of getCertificationResponsibility) {
          certificationResponsibilityList.push({ 'label': item['id'], 'value': item['value'] });
                 }
        return certificationResponsibilityList;
      });
  }

  getInherentRiskRating() {
    this.inherentRiskRatingURL = environment.serverUrl + 'internalControl/getInherentRiskRating';
    return this.httpClient.get(this.inherentRiskRatingURL, appConstants.getHeaderOptions).
      map((getInherentRiskRating: SelectItem[]) => {
        const inherentRiskRatingList: any = [];
        for (const item of getInherentRiskRating) {
          inherentRiskRatingList.push({ 'label': item['id'], 'value': item['value'] });
                 }
        return inherentRiskRatingList;
      });
  }

  getControlRiskRating() {
    this.controlRiskRatingURL = environment.serverUrl + 'internalControl/getControlRiskRating';
    return this.httpClient.get(this.controlRiskRatingURL, appConstants.getHeaderOptions).
      map((getControlRiskRating: SelectItem[]) => {
        const controlRiskRatingList: any = [];
        for (const item of getControlRiskRating) {
          controlRiskRatingList.push({ 'label': item['id'], 'value': item['value'] });
                 }
        return controlRiskRatingList;
      });
  }

  getRelatedTechnology() {
    this.relatedTechnologyURL = environment.serverUrl + 'internalControl/getRelatedTechnology';
    return this.httpClient.get(this.relatedTechnologyURL, appConstants.getHeaderOptions).
      map((getRelatedTechnology: SelectItem[]) => {
        const relatedTechnologyList: any = [];
        for (const item of getRelatedTechnology) {
          relatedTechnologyList.push({ 'label': item['id'], 'value': item['value'] });
                 }
        return relatedTechnologyList;
      });
  }

  getRelatedSystem() {
    console.log('inside getRelated System');
    this.relatedSystemURL = environment.serverUrl + 'internalControl/getRelatedSystems';
    console.log(this.relatedSystemURL , 'this.relatedSystemURL');
    return this.httpClient.get(this.relatedSystemURL, appConstants.getHeaderOptions).
      map((getRelatedSystem: SelectItem[]) => {
        const relatedSystemList: any = [];
        for (const item of getRelatedSystem) {
          relatedSystemList.push({ 'label': item['id'], 'value': { 'id': item['id'], 'value': item['value'], 'sorter': item['sorter']} });
                 }
                 console.log('inside getRelated System Results===> ', relatedSystemList);
        return relatedSystemList;
      });
  }

  /**   Risk Assessment  dropdowns/multiselect */

  getDriverCategory() {
    this.driverCategoryURL = environment.serverUrl + 'internalControl/getDriverCategory';
    return this.httpClient.get(this.driverCategoryURL, appConstants.getHeaderOptions).
      map((getDriverCategory: SelectItem[]) => {
        const driverCategoryList: any = [];
        for (const item of getDriverCategory) {
          driverCategoryList.push({ 'label': item['id'], 'value': item['value'] });
                 }
        return driverCategoryList;
      });
  }

  getEventType() {
    this.evetTypeURL = environment.serverUrl + 'internalControl/getEventType';
    return this.httpClient.get(this.evetTypeURL, appConstants.getHeaderOptions).
      map((getEventType: SelectItem[]) => {
        const eventTypeList: any = [];
        for (const item of getEventType) {
          eventTypeList.push({ 'label': item['id'], 'value': item['value'] });
                 }
        return eventTypeList;
      });
  }

  /** Business Process dropdown */

  getApplicableTo() {
    this.applicableToURL = environment.serverUrl + 'internalControl/getApplicableTo';
    return this.httpClient.get(this.applicableToURL, appConstants.getHeaderOptions).
      map((getApplicableTo: SelectItem[]) => {
        const applicableToList: any = [];
        for (const item of getApplicableTo) {
          applicableToList.push({ 'label': item['id'], 'value': item['value'] });
                 }
        return applicableToList;
      });
  }

  /** Bussiness Activity dropdown */
  getEnhancementProject() {
    this.enhancementProjectURL = environment.serverUrl + 'internalControl/getEnhancementProject';
    return this.httpClient.get(this.enhancementProjectURL, appConstants.getHeaderOptions).
      map((getEnhancementProject: SelectItem[]) => {
        const enhancementProjectList: any = [];
        for (const item of getEnhancementProject) {
          enhancementProjectList.push({ 'label': item['id'], 'value': item['value'] });
                 }
        return enhancementProjectList;
      });
  }

  /** Control */
  getFramework() {
    this.frameworkURL = environment.serverUrl + 'internalControl/frameworkList';
    return this.httpClient.get(this.frameworkURL, appConstants.getHeaderOptions).
      map((getFramework: SelectItem[]) => {
        const frameworkList: any = [];
        for (const item of getFramework) {
          frameworkList.push({ 'label': item['id'], 'value': item['value'] });
                 }
        return frameworkList;
      });
  }
  getChecklist(value) {
    console.log('Inside GetChecklist with values=', value);
    this.checklistURL = environment.serverUrl + 'internalControl/checkListList';
    return this.httpClient
      .post(this.checklistURL, value, appConstants.postHeaderOptions). map((getChecklist: SelectItem[]) => {
        const checklistList: any = [];
        for (const item of getChecklist) {
          checklistList.push({ 'label': item['value'], 'value': item['id'] });
                 }
        return checklistList;
      });
  }
  getControl(value) {
    this.controlURL = environment.serverUrl + 'internalControl/checkListControlList';
    return this.httpClient
      .post(this.controlURL, value, appConstants.postHeaderOptions). map((getControl: SelectItem[]) => {
        const controlList: any = [];
        for (const item of getControl) {
          controlList.push({ 'label': item['value'], 'value': item['id'] });
                 }
        return controlList;
      });
  }

  /** Control Evidence */
  getSource(value) {
    this.sourceURL = environment.serverUrl + 'internalControl/sourceList';
    return this.httpClient
      .post(this.sourceURL, value, appConstants.postHeaderOptions). map((getSource: SelectItem[]) => {
        const sourceList: any = [];
        for (const item of getSource) {
          sourceList.push({ 'label': item['value'], 'value': item['id'] });
                 }
        return sourceList;
      });
  }

}
