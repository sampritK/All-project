import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  color = '';
  priceTo = 0;
  priceFrom = 0;
  size = 'M';

constructor(private activeRouter: ActivatedRoute) {

  this.activeRouter.queryParams.subscribe(params => {
   this.color = params['color'];
   this.priceTo = params['priceTo'];
   this.priceFrom = params['priceFrom'];
   this.size = params['size'];
  })
 }

}
