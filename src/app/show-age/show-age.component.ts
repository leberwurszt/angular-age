import { Component, OnInit, Input, NgModule } from '@angular/core';
import { AgeService } from '../age.service';
import { Age } from '../age';

enum sortation {
  UNSORTED,
  SORT_NAME,
  SORT_AGE,
  SORT_COUNT
};

@Component({
  selector: 'app-show-age',
  templateUrl: './show-age.component.html',
  styleUrls: ['./show-age.component.css']
})

export class ShowAgeComponent implements OnInit {

  constructor(public ageService: AgeService) { }
  public age: Object = new Array();
  public ages: Object[] = new Array();
  public newName: string = "";
  public sortBy: sortation = sortation.UNSORTED;
  private names: string[] = [
    'Hans',
    'Peter',
    'Paul',
    'Sabine',
    'Bill',
    'Mandy',
    'Sarah',
    'Michael'
  ];

  ngOnInit(): void {
    this.getAges(this.names);
  }


  clickRemoveName(age: Object): void {
    const index: number = this.ages.indexOf(age);
    if (index !== -1) {
        this.ages.splice(index, 1);
    }        
  }

  clickAddName(): void {
    if(this.newName != "")
      this.getAge(this.newName);
    this.newName = "";
  }

  clickName(): void {
    this.sortBy=sortation.SORT_NAME;
    this.sort();
  }

  clickAge(): void {
    this.sortBy=sortation.SORT_AGE;
    this.sort();
  }

  clickCount(): void {
    this.sortBy=sortation.SORT_COUNT;
    this.sort();
  }

  // Sort items by selected sortation
  sort(): void {
    switch (this.sortBy) {
      case sortation.UNSORTED:
        break;
      
      case sortation.SORT_AGE:
        this.ages.sort((a, b) => a['age'] - b['age']);
        break;
      
      case sortation.SORT_COUNT:
        this.ages.sort((a, b) => a['count'] - b['count']);
        break;

      case sortation.SORT_NAME:
        this.ages.sort((a, b) => a['name'].localeCompare(b['name']));
        break;
    }
  }

  // Get class for CSS stylesheet depending on sortation
  getThClass(index: number): string {
    switch(index) {
      case 0:
        if (this.sortBy == sortation.SORT_NAME)
          return "thSorted";
        else
          return "thUnsorted";

      case 1:
        if (this.sortBy == sortation.SORT_AGE)
          return "thSorted";
        else
          return "thUnsorted";

      case 2:
        if (this.sortBy == sortation.SORT_COUNT)
          return "thSorted";
        else
          return "thUnsorted";

      default:
        return "thUnsorted";
    }
  }

  // Get items from default name array
  getAges(names: string[]) {
    this.ageService.getAges(names).subscribe(
      data => {
        console.log("data");
        console.log(data);
        data.forEach(age => {
          this.ages.push(age);
        });
        console.log("this.ages");
        console.log(this.ages);
      },
      //data => { console.log(this.ages.push(data))},
      err => console.error(err),
      () => {
        console.log('done loading age');
        this.sort();
    }
    );
  }

  // Get new item
  getAge(name: string) {
    this.ageService.getAge(name).subscribe(
      //data => { console.log(data)},
      data => {
        this.ages.push(data);
      },
      //data => { console.log(this.ages.push(data))},
      err => console.error(err),
      () => {
        console.log('done loading age');
        this.sort();
    }
    );
  }
}
