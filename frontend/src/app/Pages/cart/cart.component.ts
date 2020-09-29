import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var paypal;

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @ViewChild('paypal',{}) paypalElement: ElementRef;
  cartProductList = [];
  total:0

  getTotal(product) { 
    this.total += product.price;
  }

  addProductToCart(product) {
    const productExistInCart = this.cartProductList.find(({name}) => name === product.name); // find product by name
    if (!productExistInCart) {
      this.cartProductList.push({...product, num:1}); // enhance "porduct" opject with "num" property
      return;
    }
    productExistInCart.num += 1;
  }
   removeProduct(product) {
    this.cartProductList = this.cartProductList.filter(({name}) => name !== product.name)
  }
  paidFor = false;
  ngOnInit() {
    this.cartProductList.forEach(this.getTotal);
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: "Pago de pedido",
                amount: {
                  value: this.total
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }

  addElement(json){
    this.total = this.total + json.price
  }
}
