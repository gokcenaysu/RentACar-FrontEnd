import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car'
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[] = [];
  brands:Brand[]=[];
  colors:Color[]=[];
  dataLoaded=false;
  filterText="";

  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else{
        this.getCars()
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response =>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response =>{
      console.log(brandId);
      this.cars=response.data
      this.dataLoaded=true;
    })
  }

  addToCart(car:Car){
    this.toastrService.success("Rented",car.carName)
    this.cartService.addToCart(car);
  }
}
