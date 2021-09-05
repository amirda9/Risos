import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

  title:string;
  mybool:boolean=false;
  content:string;
  subcontent:string;
  status:number;
  bt_text:string;

  constructor(private route:ActivatedRoute , private router:Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.status = this.router.getCurrentNavigation().extras.state.status;
      }
    });
   }

  ngOnInit() {

    // this.status =1 ;
    if(this.status==1){
      this.title = "Order";
      this.content = "Your order has been successfully registered"
      this.bt_text = "Orders";
    }
    else{
    if(this.status==2){
      this.content = "Your Password has been changed successfully";
      this.title = "Reset password";
      this.bt_text = "Log in"
    }
    else{
      this.title="Sign up";
      this.content="Sign up was succesful";
      this.subcontent="You can start using the Application now"
      this.bt_text = "Log in"
    }
  }
  }



  btn(){
    if(this.status == 1){
      this.router.navigate(['/tabs/orders'])
    }
    if(this.status != 1){
      this.router.navigate(['/login'])
    }


  }
}

