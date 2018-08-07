import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {
  items: MenuItem[];
  itemsPath: MenuItem[];
  home: MenuItem;
  constructor() {
    this.home = { icon: 'fa fa-home' };
    this.itemsPath = [
      { label: 'Matrix'},
      { label: 'New Matrix', routerLink: 'generalMatrixInformation'}];

    this.items = [
      {label: 'General Matrix Information', routerLink: 'generalMatrixInformation'},
      {label: 'Risk Assessment', routerLink: 'riskAssessment'},
      {label: 'Business Process', routerLink: 'businessProcess'},
      {label: 'Business Activity', routerLink: 'businessActivity'},
      {label: 'Control', routerLink: 'control'},
      {label: 'Control Evidence', routerLink: 'controlEvidence'}
  ];
   }

  ngOnInit() {
  }

}
