import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingCardComponent } from './training-card.component';
import { AbsoluteRoutingModule } from "../../../../../pipes/absolute-routing/absolute-routing.module";



@NgModule({
    declarations: [
        TrainingCardComponent
    ],
    exports: [TrainingCardComponent],
    imports: [
        CommonModule,
        AbsoluteRoutingModule
    ]
})
export class TrainingCardModule { }
