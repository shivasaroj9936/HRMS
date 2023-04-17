import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonTextEditorComponent } from './common-text-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';



@NgModule({
  declarations: [
    CommonTextEditorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorModule

  ],
  // providers:[{provide:TINYMCE_SCRIPT_SRC,useValue:'tinymce/tinymce.min.js'}],
  exports:[CommonTextEditorComponent]
})
export class CommonTextEditorModule { }
