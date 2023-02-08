import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,AbstractControl} from '@angular/forms'
import { IDropdownSettings } from 'ng-multiselect-dropdown';
// import csc from 'country-state-city'
import { ICountry, IState, ICity } from 'country-state-city';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DROPDOWN_CONTROL_VALUE_ACCESSOR } from 'ng-multiselect-dropdown/multiselect.component';


let Country = require('country-state-city').Country;
let State = require('country-state-city').State;
let City=require('country-state-city').City;

let dropDownList=[];
   let selectedItems = [];
  let  dropdownSettings={};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  countryDropdownSettings:any;
  stateDropdownSettings:any;
  cityDropdownSettings:any;
  form:any= FormGroup;
  countries : ICountry[] = [];
  states : IState[] = [];
  cities : ICity[] = [];
  selectedCountryCode : String | undefined;

  subscriptions : Subscription[] = [];
  

  constructor(private formBuilder : FormBuilder, private http : HttpClient){}

  ngOnInit(){
    this.initForm();
    this.initDropdownSettings();
    this.getCountries();
    this.handleValueChanges();
   //this.callAPIData();


    



 }

 handleResetClick(){
  this.form.patchValue({
    country : []
  })
}

// callAPIData(){
//   this.http.get('/api/getData').subscribe(response => {
//     console.log('response is ', response);
//   })
// }

handleValueChanges(){
  this.subscriptions.push(this.form.get('country').valueChanges.subscribe((response:any) => {
    this.selectedCountryCode = response[0].isoCode;
    this.getState(response[0].isoCode);
  }));

  this.subscriptions.push(this.form.get('state').valueChanges.subscribe((response:any) => {
    this.getCity(this.selectedCountryCode,response[0].isoCode);
  }));
 
}

initDropdownSettings(){
  this.countryDropdownSettings = {
    singleSelection: true,
    idField: 'isoCode',
    textField: 'name',
    // selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true,
    maxHeight : '100'
  };
}

getCountries(){
  this.countries = Country.getAllCountries();
  //this.form.get('country').disable({onlySelf : true});
  // this.form.patchValue({
  //   country : [this.countries[0]]
  // })
  
}

getState(countryCode:any){
  this.states = State.getStatesOfCountry(countryCode);
}

getCity(countryCode:any, stateCode:any){
  this.cities = City.getCitiesOfState(countryCode, stateCode);
  //  this.form.get('city').UnSelect({onlySelf : true});
}

initForm(){
  this.form = this.formBuilder.group({
    country : ['',[Validators.required]],
    state : [''],
    city : ['']
  })
}


customValidtor(abstractControl  : AbstractControl){
  console.log('control is ', abstractControl);
  return null;

}

handleButtonClick(){
  if(!this.form.valid) this.form.markAllAsTouched();
}

ngOnDestroy(){
  this.subscriptions.forEach(item => {
    if(item) item.unsubscribe();
  })


  //  dropDownList=[];
  //  selectedItems = [];
  //  dropdownSettings={};
  // this.ngOnInit(){
  //   this.dropDownList=[
  //     { item_id: 1, item_text: 'Mumbai' },
  //     { item_id: 2, item_text: 'Bangaluru' },
  //     { item_id: 3, item_text: 'Pune' },
  //     { item_id: 4, item_text: 'Navsari' },
  //     { item_id: 5, item_text: 'New Delhi' }
  //   ];
  //   this.dropdownSettings.IDropdownSettings={
  //     singleSelection: false,
  //         idField: 'item_id',
  //          textField: 'item_text',
  //          selectAllText: 'Select All',
  //          unSelectAllText: 'UnSelect All',
  //          itemsShowLimit: 3,
  //          allowSearchFilter: true
  //   };
  // }
  // onItemSelect(item: any) {
  //        console.log(item);
  //      }
  //      onSelectAll(items: any) {
  //        console.log(items);
  //      }
}

// private getFullName(){
//   return `${this.firstName} ${this.lastName}`;
// }


  // dropdownList = [];
  // selectedItems = [];
  // dropdownSettings:IDropdownSettings | undefined;
  // ngOnInit(): {
  //   this.dropdownList = [
  //     { item_id: 1, item_text: 'Mumbai' },
  //     { item_id: 2, item_text: 'Bangaluru' },
  //     { item_id: 3, item_text: 'Pune' },
  //     { item_id: 4, item_text: 'Navsari' },
  //     { item_id: 5, item_text: 'New Delhi' }
  //   ];
  //   this.selectedItems = [
  //     { item_id: 3, item_text: 'Pune' },
  //     { item_id: 4, item_text: 'Navsari' }
  //   ];
  //   this.dropdownSettings = {
  //     singleSelection: false,
  //     idField: 'item_id',
  //     textField: 'item_text',
  //     selectAllText: 'Select All',
  //     unSelectAllText: 'UnSelect All',
  //     itemsShowLimit: 3,
  //     allowSearchFilter: true
  //   };
  //   onItemSelect(item: any) {
  //     console.log(item);
  //   }
  //   onSelectAll(items: any) {
  //     console.log(items);
  //   }
  // }
}
 
  // dropdownList: any[] | undefined;
  // dropdownSettings: { singleSelection: boolean; idField: string; textField: string; selectAllText: string; unSelectAAllText: string; } | undefined;
  // form: FormGroup | undefined;
  // getObjectListFromData: any;

  // constructor(private formBuilder: FormBuilder){}
  
  // ngOnInit(): void {
  //   this.initForm();
  //   this.dropdownList = this.getData();
  //   this.dropdownSettings = {
  //     singleSelection:false,
  //     idField:'item_id',
  //     textField:'item_text',
  //     selectAllText:'Select All',
  //     unSelectAAllText:'UnSelect All'
  //   };
  // }

  // initForm(){
  //   this.form = this.formBuilder.group({
  //     skills:['',[Validators.required]]
  //   })
  // }

  // handleButtonClick(){
  //   console.log('reactive form value', this.form.value);
  //   console.log('Actual data', this.getObjectListFromData(this.form.value.skills.map(item=>item.item_id));)
  // }

  // onItemSelect($event: any){
  //   console.log('$event is', $event)
  // }
  // getData():Array<any>{
  //   return[
  //     {item_id: 1, item_text: 'HTML'},
  //     {item_id: 2, item_text: 'CSS'},
  //     {item_id: 3, item_text: 'Java Script'},
  //     {item_id: 4, item_text: 'MongoDB'},
  //     {item_id: 5, item_text: 'Spring'},
  //   ];
  // }

