import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { joyeria } from './jewelry-list/joyeria';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JewelrCartService {

  private _cartList:joyeria[] = [];
  cartList: BehaviorSubject<joyeria[]> =new BehaviorSubject([]);

  constructor() { }

  addToCart(joyeria: joyeria) {
    let item: joyeria = this._cartList.find ((v1) => v1.name == joyeria.name);
   if(!item){
      this._cartList.push({...joyeria});
   }
     else{
      item.quantity += joyeria.quantity;
    }
    console.log(this._cartList);   
    this.cartList.next(this._cartList); 
   }
  }


