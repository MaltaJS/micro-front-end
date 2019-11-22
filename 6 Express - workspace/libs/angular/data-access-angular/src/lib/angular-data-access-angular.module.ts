import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularService } from './angular.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [AngularService]
})
export class AngularDataAccessAngularModule {}
