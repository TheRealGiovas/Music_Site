import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'shopping-cart',
  template: `
  <h1>Shopping Cart ({{calcTotal()}})</h1>
  <cart-product *ngFor="let product of products" [product]="product" (productRemoved)="removeProduct($event)"><cart-product>
  `,
  styles: [`:host{border: 1px solid #000;}`]
})
export class ShoppingCartComponent  {
  @Input() products: any[];
  @Output() productRemoved = new EventEmitter();
  calcTotal() {
    return this.products.reduce((acc, prod) => acc+= prod.num ,0)
  }
  removeProduct(product) {
    this.productRemoved.emit(product)
  }
}