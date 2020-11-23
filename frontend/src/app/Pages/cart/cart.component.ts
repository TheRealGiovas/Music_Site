import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var paypal;

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @ViewChild('paypal',{}) paypalElement: ElementRef;

  cart = JSON.parse(localStorage.getItem("cart"));

  paidFor = false;
  total = 0;
  ngOnInit() {
    this.cart.forEach(product => {
      this.total += product.price;
    });
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: "Pago FM's",
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

}
