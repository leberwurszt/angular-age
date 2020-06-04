import { Component, OnInit } from '@angular/core';
import { AgeService } from '../age.service';

@Component({
  selector: 'app-show-age',
  templateUrl: './show-age.component.html',
  styleUrls: ['./show-age.component.css']
})
export class ShowAgeComponent implements OnInit {

  constructor(public ageService: AgeService) { }
  public ages: any;
  private names: string[] = [
    'Hans',
    'Peter',
    'Paul',
    'Sabine'
  ]
  
  ngOnInit(): void {
    this.getAge("Hans");
    console.log(this.ages);
  }

  getAge(name: string) {
    this.ageService.getAge(name).subscribe(
      data => {this.ages = data},
      err => console.error(err),
      () => console.log('done loading age')
    );
  }
}
