import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderSampleComponent } from './loader-sample.component';



@NgModule({
  declarations: [LoaderSampleComponent],
  imports: [
    CommonModule
  ],
  exports:[LoaderSampleComponent]
})
export class LoaderSampleModule { }
