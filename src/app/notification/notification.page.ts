import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AllnotifGQL, AllnotifQuery } from 'src/generated/graphql';
import { ID } from '../constants';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  notifs: Observable<AllnotifQuery['allNotification']['edges']>;
  constructor(private notif: AllnotifGQL) { }

  ngOnInit() {
    this.notifs = this.notif.watch({ id: localStorage.getItem(ID) }).valueChanges.pipe(map(result => result.data.allNotification.edges))
  }

}
