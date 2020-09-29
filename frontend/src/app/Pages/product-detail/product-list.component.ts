import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-list',
  template: `
  <h1>Products</h1>
  <product *ngFor="let product of products" [product]="product" (productAdded)="addProductToCart($event)"></product>
  `,
  styles: [`:host{border: 1px solid #000;}`]
})
export class ProductListComponent  {
  @Input() products: any[];
  @Output() productAdded = new EventEmitter();
  addProductToCart(product) {
    this.productAdded.emit(product);
  }
}
