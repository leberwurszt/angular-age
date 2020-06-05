import { Component, OnInit } from '@angular/core';
import { AgeService } from '../age.service';
import { Age } from '../age';

@Component({
  selector: 'app-show-age',
  templateUrl: './show-age.component.html',
  styleUrls: ['./show-age.component.css']
})
export class ShowAgeComponent implements OnInit {

  constructor(public ageService: AgeService) { }
  public age: Object = new Array();
  public ages: Object[] = new Array();
  private names: string[] = [
    'Hans',
    'Peter',
    'Paul',
    'Sabine',
    'Bill',
    'Mandy',
    'Sarah',
    'Michael'
  ]

  clickName(): void {
    this.ages.sort((a, b) => a['name'].localeCompare(b['name']));
  }

  clickAge(): void {
    this.ages.sort((a, b) => a['age'] - b['age']);
  }

  clickCount(): void {
    this.ages.sort((a, b) => a['count'] - b['count']);
  }
  
  ngOnInit(): void {
    
    /*
    this.names.forEach(name => {
      this.getAge(name);
      
    });
    */
    
    this.getAges(this.names);
    //console.log(this.ages);
    
    //this.getAge("Hans");
    //console.log(this.names);
    //console.log("a");
  }

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
      () => {console.log('done loading age')}
    );
  }

  getAge(name: string) {
    this.ageService.getAge(name).subscribe(
      //data => { console.log(data)},
      data => {
        this.ages.push(data);
      },
      //data => { console.log(this.ages.push(data))},
      err => console.error(err),
      () => {console.log('done loading age')}
    );
  }
}
