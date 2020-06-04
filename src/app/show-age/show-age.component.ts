import { Component, OnInit } from '@angular/core';
import { AgeService } from '../age.service';

@Component({
  selector: 'app-show-age',
  templateUrl: './show-age.component.html',
  styleUrls: ['./show-age.component.css']
})
export class ShowAgeComponent implements OnInit {

  constructor(public ageService: AgeService) { }
  public age;
  
  ngOnInit(): void {
    this.getAge();
  }

  getAge() {
    this.ageService.getAge().subscribe(
      data => { this.age = data},
      err => console.error(err),
      () => console.log('done loading age')
    );
  }
}
