import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JewelrCartService } from '../jewelr-cart.service';
import { joyeria } from '../jewelry-list/joyeria';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<joyeria[]>;
  constructor(private cart: JewelrCartService) {
    this.cartList$ = cart.cartList.asObservable();
  };

  ngOnInit(): void {
  };

}
