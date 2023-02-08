import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {MatSliderModule} from '@angular/material/slider';

import { AppComponent } from './app.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HttpClientModule } from '@angular/common/http';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { ExpericenceComponent } from './expericence/expericence.component'; 

// import { IDropdownSettings } from 'ng-multiselect-dropdown';
// import {Multiselect} from 'multiselect-react-dropdown'

@NgModule({
  declarations: [
    AppComponent,
    SuggestionsComponent,
    ExpericenceComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, FormsModule,
    HttpClientModule,
    // Multiselect
    // IDropdownSettings,
    NgMultiSelectDropDownModule.forRoot(),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
