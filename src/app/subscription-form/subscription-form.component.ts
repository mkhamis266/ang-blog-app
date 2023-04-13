import { Component, OnInit } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscriberService } from '../services/subscriber.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss'],
})
export class SubscriptionFormComponent implements OnInit {
  constructor(
    private subService: SubscriberService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  onSubmit(form: any) {
    const subData: Sub = form.value;
    this.subService.checkSubs(subData.email).subscribe((data) => {
      if (data.empty) {
        this.subService.addSub(subData);
      } else {
        this.toastr.warning('this email has already been submitted');
      }
    });
  }
}
