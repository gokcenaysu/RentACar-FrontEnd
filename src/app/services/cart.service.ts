import { CartItems } from './../models/cartItems';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(car:Car){
    let item = CartItems.find(cart=>cart.car.carId===car.carId);
    if(item){
      item.quantity+=1;
    }
    else{
      let cartItem = new CartItem();
      cartItem.car=car;
      cartItem.quantity=1;
      CartItems.push(cartItem)
    }
  }

  removeFromCart(car:Car){
    let item = CartItems.find(cart=>cart.car.carId===car.carId);
    CartItems.splice(CartItems.indexOf(item),1);
  }

  list():CartItem[]{
    return CartItems;
  }
}
