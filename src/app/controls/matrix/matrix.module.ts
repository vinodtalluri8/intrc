import { SharedModule } from 'diva-shared-apps/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralMatrixInfoComponent } from './new-matrix/general-matrix-info/general-matrix-info.component';
import { MatrixComponent } from './matrix.component';
import {DropdownModule} from 'primeng/dropdown';

import { MatrixTabComponent } from './new-matrix/matrix-tab/matrix-tab.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { RiskAssessmentComponent } from './new-matrix/risk-assessment/risk-assessment.component';
import { BusinessActivityComponent } from './new-matrix/business-activity/business-activity.component';
import { ControlComponent } from './new-matrix/control/control.component';
import { ControlEvidenceComponent } from './new-matrix/control-evidence/control-evidence.component';
import { BusinessProcessComponent } from './new-matrix/business-process/business-process.component';
import {MultiSelectModule} from 'primeng/multiselect';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ButtonModule} from 'primeng/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { MatrixService } from './services/matrix.service';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { NewMatrixComponent } from './new-matrix/new-matrix.component';
import { SelectMatrixComponent } from './select-matrix/select-matrix.component';
import { ConfirmationService } from 'primeng/api';


@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    TabMenuModule,
    SharedModule,
    MultiSelectModule,
    RadioButtonModule,
    ButtonModule,
    FormsModule,
ReactiveFormsModule,
CheckboxModule,
DialogModule
  ],
  declarations: [MatrixComponent,
     GeneralMatrixInfoComponent,
      MatrixTabComponent, RiskAssessmentComponent,
       BusinessActivityComponent, ControlComponent,
        ControlEvidenceComponent, BusinessProcessComponent, NewMatrixComponent, SelectMatrixComponent],
  providers: [MatrixService, ConfirmationService]
})
export class MatrixModule { }
