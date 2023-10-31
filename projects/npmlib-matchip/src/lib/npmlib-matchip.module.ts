import { NgModule } from '@angular/core';
import { NpmlibMatchipComponent } from './npmlib-matchip.component';
import { MatChipInput, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule, matFormFieldAnimations } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'; 
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationPlayer } from '@angular/animations';


@NgModule({
  declarations: [
    NpmlibMatchipComponent
  ],
  imports: [
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserModule,
    ],
  exports: [
    NpmlibMatchipComponent
  ]
})
export class NpmlibMatchipModule { }
