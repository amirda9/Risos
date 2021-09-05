import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { PatientGQL, Save_DesignGQL, ServiceGQL } from 'src/generated/graphql';
import { ID, P_ID } from '../constants';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.page.html',
  styleUrls: ['./comparison.page.scss'],
})
export class ComparisonPage implements OnInit {


  img :any ;
  _id:any;
  s_id:any;
  secondimg:string;
  ratio:number;

  t_model:string;
  t_color:string;

  constructor(private save_smile:Save_DesignGQL,private route:ActivatedRoute , private router:Router, private servicegql: ServiceGQL , private patientgql:PatientGQL) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.img = this.router.getCurrentNavigation().extras.state.image;
        this._id = this.router.getCurrentNavigation().extras.state._id;
        this.ratio = this.router.getCurrentNavigation().extras.state.ratio;
        this.t_model = this.router.getCurrentNavigation().extras.state.model;
        this.t_color = this.router.getCurrentNavigation().extras.state.color;
        // console.log("smile _id")
        console.log(this.t_color);
        console.log(this.t_model);


      }
    });
  }

  ngOnInit() {

    this.patientgql.watch({
      id:"Patient:"+localStorage.getItem(P_ID)
    }).valueChanges.subscribe(res=>{
      this.secondimg = res.data.Patient.patientPic.smileImage;
    })

    console.log(this._id)
    var imageUrl = URL.createObjectURL(this.img);

    var img = document.getElementById("image") as HTMLImageElement
    img.src = imageUrl

    // img.height =

    // document.querySelector("#image").src = imageUrl;
  }


  forward() {
    // console.log("go")
    // console.log(this._id)

    this.servicegql.mutate({
      p_id: this._id,
      d_id: localStorage.getItem(ID)
    }).subscribe(
      res => {
      // this.s_id=res.data.createService.service.id;
      // console.log(res.data.createService.service.id);
      this.s_id = res.data.createService.service.id;
      console.log(this.s_id)
      let navigationExtras: NavigationExtras = {
        state: {
          s_id: this.s_id
        }
      };
      // console.log(this.s_id);
      this.router.navigate(['/lab-c'], navigationExtras);
    }
    ,errors=>{

    })


    // console.log(this.t_color,this.t_model , " infos")

    this.save_smile.mutate({
      dr:+localStorage.getItem(ID),
      p_id:+localStorage.getItem(P_ID),
      color:this.t_color,
      model:this.t_model,
      images:{
        smileImageResult:this.img
      }
    }).subscribe(res=>{
      console.log("sending res is :" + res.data.updateSmileDesign.status)
    })


  }



  backward(){
    let navigationExtras: NavigationExtras = {
      state: {
        id: this._id
      }
    };
    this.router.navigate(['/tabs/p-detail'], navigationExtras);
  }

}
