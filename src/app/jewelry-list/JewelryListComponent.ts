import { Component, OnInit } from '@angular/core';
import { JewelrCartService } from '../jewelr-cart.service';
import { joyeria } from './joyeria';


@Component({
  selector: 'app-jewelry-list',
  templateUrl: './jewelry-list.component.html',
  styleUrls: ['./jewelry-list.component.scss']
})
export class JewelryListComponent implements OnInit {
  joyas: joyeria[] = [
    {
      name: "Anillo Pave Full Ice",
      type: "Anillo",
      price: 5000020,
      stock: 7,
      image: "assets/img/pave.jpg",
      sales: false,
      quantity: 0,
    },
    {
      name: "Dije Oro Full Ice",
      type: "Dije",
      price: 4500,
      stock: 10,
      image: "assets/img/dijeorofullice.jpg",
      sales: true,
      quantity: 0,
    },
    {
      name: "Anillo Don Rouch",
      type: "Anillo",
      price: 2001000,
      stock: 0,
      image: "assets/img/anillooro.jpg",
      sales: false,
      quantity: 0,
    },
    {
      name: "Chain Don Rouch",
      type: "Cadena",
      price: 2000000,
      stock: 0,
      image: "assets/img/chaindeoro.jpg",
      sales: false,
      quantity: 0,
    },
  ];

  
  constructor(private cart: JewelrCartService) {
   }

  ngOnInit(): void {
  }

  addToCart(joyeria): void{
    this.cart.addToCart(joyeria)
    joyeria.stock -= joyeria.quantity;
    joyeria.quantity =0;
  }

  maxReached(m: string){
    alert(m)
  }
}
