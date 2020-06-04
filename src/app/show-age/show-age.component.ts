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
    'Bill'
  ]
  
  ngOnInit(): void {
    this.names.forEach(name => {
      this.getAge(name);
    });
    //this.getAge("Hans");
    //console.log(this.names);
    //console.log("a");
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
