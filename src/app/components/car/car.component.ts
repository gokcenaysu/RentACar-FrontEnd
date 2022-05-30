import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  car1={carId:1, carName:'Mercedes'}
  car2={carId:2, carName:'BMW'}
  car3={carId:3, carName:'Honda'}

  cars=[
    this.car1,
    this.car2,
    this.car3
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
