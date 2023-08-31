import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { param } from 'cypress/types/jquery';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

photoId = 0;
productId = 0;

constructor( private ActivatedRoute: ActivatedRoute ) {
  this.ActivatedRoute.params.subscribe((params) => {
    // console.log(params);
    const interValue = params;

    this.photoId = interValue['photoId'];
    this.productId = interValue['productId'];
  });
}

ngOnInit(): void {
    
}

}
