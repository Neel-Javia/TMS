import { Component, OnInit } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  dropdownList: { item_id: number; item_text: string; }[] | any;
  selectedItems: { item_id: number; item_text: string; }[] | any;
  dropdownSettings:IDropdownSettings | any;
  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'HTML' },
      { item_id: 2, item_text: 'CSS' },
      { item_id: 3, item_text: 'JavaScript' },
      { item_id: 4, item_text: 'Java' },
      { item_id: 5, item_text: 'C' },
      { item_id: 6, item_text: 'C++' },
      { item_id: 7, item_text: 'C#' },
      { item_id: 8, item_text: 'Python' },
      { item_id: 9, item_text: 'Go' },
      { item_id: 10, item_text: 'R' },
      { item_id: 11, item_text: 'PHP' },
      { item_id: 12, item_text: 'React' },
      { item_id: 13, item_text: 'Angular' },
      { item_id: 14, item_text: 'MongoDB' },
      { item_id: 15, item_text: '.NET' },
    ];
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  }

