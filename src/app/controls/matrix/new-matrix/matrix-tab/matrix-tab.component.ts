import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-matrix-tab',
  templateUrl: './matrix-tab.component.html',
  styleUrls: ['./matrix-tab.component.css']
})
export class MatrixTabComponent implements OnInit {
  items: MenuItem[];
  constructor() { }
  ngOnInit() {
      this.items = [
          {label: 'General Matrix Information', routerLink: 'generalMatrixInformation'},
          {label: 'Risk Assessment', routerLink: 'riskAssessment'},
          {label: 'Business Process', routerLink: 'businessProcess'},
          {label: 'Business Activity', routerLink: 'businessActivity'},
          {label: 'Control', routerLink: 'control'},
          {label: 'Control Evidence', routerLink: 'controlEvidence'}
      ];
  }
}
