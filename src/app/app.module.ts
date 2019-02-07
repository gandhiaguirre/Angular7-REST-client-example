import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './customMaterial.module';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialogDetailRaccoon_Component } from './components/dialogDetailRaccoon/dialogDetailRaccoon.component';
import { GridFeelingsRaccoon_Component } from './components/gridFeelingsRaccoon/gridFeelingsRaccoon.component';
import { SelectedFeelingRaccoon_Component } from './components/selectedFeelingRaccoon/selectedFeelingRaccoon.component';
import { TableFeelingsRaccoon_Component } from './components/tableFeelingsRaccoon/tableFeelingsRaccoon.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogDetailRaccoon_Component,
    GridFeelingsRaccoon_Component,
    SelectedFeelingRaccoon_Component,
    TableFeelingsRaccoon_Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
