import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { Req_OtpGQL, VerifyUser, Verify_UserGQL } from 'src/generated/graphql';
import { USERNAME } from '../constants';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {

  trans_state: number = 1;
  username: string;
  code: string;
  subscription: Subscription;
  source = timer(1000, 1000);
  time: number;
  duration: number = 60;
  time_left: boolean = true;

  constructor(private verify_userGQL: Verify_UserGQL, private router: Router, private route: ActivatedRoute, private Req_otp: Req_OtpGQL) {
    // this.username = localStorage.getItem(USERNAME);
  }

  ngOnInit() {
    this.observableTimer();
    // console.log(this.time);
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.username = this.router.getCurrentNavigation().extras.state.s_id;
        this.trans_state = this.router.getCurrentNavigation().extras.state.trans_state;
      }
    });
  }

  resend() {
    if (!this.time_left) {
      this.Req_otp.mutate({
        username: this.username,
      }).subscribe(
        next => {
          console.log(next.data.requestOtp.status)
        }
      )
    }
  }


  observableTimer() {

    this.subscription = this.source.subscribe(val => {
      if (val < this.duration) {
        this.time = this.duration - val;
        // console.log(this.time);
      }
      if (val == this.duration) {
        // console.log("reached")
        this.time_left = false;
        // this.TryAgain()
      }
      // console.log(this.time)
    });
  }


  ResCheck() {
    this.verify_userGQL.mutate({
      Username: this.username,
      Otp: this.code
    }
    ).subscribe(
      next => {
        console.log(next.data.verifyUser.status)
        if (next.data.verifyUser.status == "success") {
          if (this.trans_state == 1) {
            let navigationExtras: NavigationExtras = {
              state: {
                id: this.username
              }
            };
            // this.valid = true;
            this.router.navigate(['/reset-pass'], navigationExtras)
          }
          if (this.trans_state == 2) {
            let navigationExtras: NavigationExtras = {
              state: {
                status: 0
              }
            };
            // this.valid = true;
            this.router.navigate(['/success'], navigationExtras)
          }

        }
        // if(next.data.verifyUser.status=="failed")
        else {
          // this.valid = false;
          // var el: HTMLElement = document.getElementById('form');
          // el.className = "not_valid";
          // el.classList.remove('valid');
          alert("رمز اشتباه وارد شده است.")
        }
      },(error)=>{
        alert("مشکلی در ارسال رمز یکبار مصرف ایجاد شده است لطفا دوباره امتحان کنید.")

      }
    );
  }
}
