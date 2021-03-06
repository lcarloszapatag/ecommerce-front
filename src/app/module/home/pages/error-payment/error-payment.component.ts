import {Component, OnInit} from '@angular/core';
import {RestService} from '../../../../shared/services/rest.service';
import {UtilsService} from '../../../../shared/services/util.service';
import {ShoppingCartComponent} from '../../components/shopping-cart/shopping-cart.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-error-payment',
  templateUrl: './error-payment.component.html',
  styleUrls: ['./error-payment.component.css']
})
export class ErrorPaymentComponent implements OnInit {
  public referer: any = null;

  constructor(private rest: RestService, private util: UtilsService,
              private shopping: ShoppingCartComponent,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (params['uuid']) {
        this.referer = params['uuid'];
      }
    });
  }

  ngOnInit() {
  }

}
