import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AllsmileGQL, PatientGQL, ServiceGQL } from '../../generated/graphql';
import { ID, P_ID } from '../constants';
import Konva from 'konva';
import { PhotoeditorComponent } from '../photoeditor/photoeditor.component';
import { dentalShades, teethImg,teethImgfa } from './dentalShades/dentalShades';
import { LoadingController, NavParams } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-smile',
  templateUrl: './smile.page.html',
  styleUrls: ['./smile.page.scss'],
})
export class SmilePage implements OnInit {

  focus: number;
  stage: Konva.Stage
  transform: Konva.Transformer
  teeth: Array<HTMLImageElement>
  teethKi: Array<Konva.Image>
  status:boolean = true;
  test_img = new Image;
  teeth_path: string;
  type: number = 0;
  _id: any;
  s_id: string;
  degree: number = 0;
  left: number = 80;
  top: number = 250;
  height: number = 20;
  width: number = 20;
  img = new Image();
  canvas: any;
  ctx: any;
  startX;
  startY;
  isDown = false;


  teethless:string;
  smileimg:string;


  backgroundLayer: Konva.Layer
  teethLayer: Konva.Layer
  teethModel: string[]
  teethsPerModel: string[]
  chosenModel: string;
  chosenTeeth: string;
  layerCount: number;
  teethColors : string[];
  chosenColor : string;
  teethPositionX: number;
  teethPositionY: number;
  pos1: number;
  pos2: number;
  pos3: number;
  pos4: number;


  width__:number;
  height__:number;
  ratio:number;
  imageObj3 = new Image();


  t_model:string;
  t_color:string;


  string1="all teeth"
  string2="no color"

  constructor(private translateserv:TranslateService,private loadingController:LoadingController,private servicegql: ServiceGQL, private route: ActivatedRoute, private router: Router, private renderer: Renderer2 , private smile_design:AllsmileGQL , private patientgql:PatientGQL) {

  }
  ngOnInit(): void {

    var imageObj = new Image();

    if(this.router.getCurrentNavigation().extras.state){
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this._id = this.router.getCurrentNavigation().extras.state._id;
        this.ratio = this.router.getCurrentNavigation().extras.state.ratio;
        // console.log("ratio is :" + this.router.getCurrentNavigation().extras.state.ratio)
        // console.log("your id is :" +this._id)
        this.patientgql.watch({
          id:"Patient:"+localStorage.getItem(P_ID)
        }).valueChanges.subscribe(res=>{
          this.smileimg = res.data.Patient.patientPic.smileImage;
          // var file=new Image();
          // file.src = 'https://api.risos.co/mediafiles/'+String(this.smileimg);
          // reader.readAsDataURL( 'https://api.risos.co/mediafiles/'+String(this.smileimg) );
          // localStorage.setItem("smileIMG", file.);
           imageObj.src = 'https://api.risos.co/mediafiles/'+String(this.smileimg);
          //  this.width__ =  imageObj.naturalWidth;
          //  this.height__ =  imageObj.naturalHeight;
          // imageObj = file;
          //  imageObj.src = "https://api.risos.co/mediafiles/82_74.png";
          //  imageObj.src = 'https://api.risos.co/mediafiles/'+String(this.smileimg);
           imageObj.crossOrigin = "anonymous"
        })
        // console.log("smile _id")
        // console.log(this._id);
      }
    });
  }
    else{
      console.log("url is : "+this.route.snapshot.paramMap.get("id"))
      this._id=this.route.snapshot.paramMap.get("id");
      this.ratio = 1;
      this.patientgql.watch({
        id:"Patient:"+localStorage.getItem(P_ID)
      }).valueChanges.subscribe(res=>{
        this.smileimg = res.data.Patient.patientPic.smileImage;
         imageObj.src = 'https://api.risos.co/mediafiles/'+String(this.smileimg);
         imageObj.crossOrigin = "anonymous"
      })
    }




    this.teethModel = Object.keys(teethImg);
    // console.log(this.translateserv.currentLang)

    this.teethColors = Object.keys(dentalShades);
    // this.teethsPerModel = teethImg["rectangle"];
    var width = 400;
    var height = 600;
    this.teeth = [];
    this.teethKi = [];
    Konva.pixelRatio = 1;
    this.stage = new Konva.Stage({
      container: 'container',
      width: 400,
      height: 400*this.ratio,
    });
    this.teethPositionX = 50;
    this.teethPositionY = 50;
    this.backgroundLayer = new Konva.Layer();
    this.stage.add(this.backgroundLayer)


    // console.log(this.translateserv.instant(JSON.stringify(this.teethModel)))

    // console.log(this.smileimg + "is ready")
    // main API:

    var yoda = new Konva.Image({
      name: 'person',
      x: 0,
      y: 0,
      image: imageObj,
      width: 400,
      height: 400*this.ratio,
      draggable: false,
    });
    imageObj.onload = () => {
      // add the shape to the layer
      this.backgroundLayer.add(yoda);
      yoda.zIndex(0);
    };
    this.teethLayer = new Konva.Layer();
    this.stage.add(this.teethLayer);
    // if(this.translateserv.currentLang=="fa"){
    //   this.teethModel = Object.keys(teethImg);
    // }
    // else{
    //   this.teethModel = Object.keys(teethImg);
    // }






    // console.log(this.teethless)
    // this._id = this.router.getCurrentNavigation().extras.state._id;
    this.smile_design.watch({
      d_id:localStorage.getItem(ID),
      p_id:localStorage.getItem(P_ID)
    }
    ).valueChanges.subscribe(res=>{
      console.log(res.data.allSmiledesignservice.edges[0].node.status)
      this.teethless = res.data.allSmiledesignservice.edges[0].node.teethLessImage;
      // console.log(this.teethless);
      this.imageObj3.src = 'https://api.risos.co/mediafiles/'+String(this.teethless);
      // imageObj3.src = "https://api.risos.co/mediafiles/82_74.png";
      this.imageObj3.crossOrigin="anonymous"
    })



  }

  result(e): void {
    // console.log(this.focus, e.target.value)
    this.focus = e.target.value;
    // console.log(this.focus, e.target.value)
    let val = e.target.value;
    // console.log(val)
    let tooths = this.teeth;
    // console.log("hii")
    this.transform.detach()
    for (let j = 0; j < tooths.length; j++) {
      if (j == val) {
        this.teethKi[j].setAttr("opacity", 1)
        this.transform.nodes([this.teethKi[j]])
        this.teethKi[j].setAttr("draggable", true)
        this.teethKi[j].zIndex(20)
      }
      else {
        this.teethKi[j].setAttr("opacity", 0.5)
        this.teethKi[j].setAttr("draggable", false)
        this.teethKi[j].zIndex(2)
      }
    }

  }

  async choseTeethModel(ev: any) {
    // console.log('Segment changed', ev.detail.value);
    this.t_model = ev.detail.value;
    console.log("model is :", this.t_model)
    if (this.chosenModel != ev.detail.value) {
      this.chosenTeeth = "0";
      this.chosenColor = "0";
      if (this.teethLayer.hasChildren()) {
        this.teethPositionX = this.teethLayer.getChildren()[0].getPosition()["x"];
        this.teethPositionY = this.teethLayer.getChildren()[0].getPosition()["y"];
      }
      this.teethLayer.destroyChildren();
      this.teeth = [];
      this.teethKi = [];
      this.chosenModel = ev.detail.value;
      this.teethsPerModel = teethImg[this.chosenModel];
      this.layerCount = 1;

      const loading = await this.loadingController.create({
        message: 'Please Wait',
        duration: 2000,
        spinner: 'bubbles'
      });
      await loading.present();

      this.teethsPerModel.forEach((value) => {
        let tooth = new Image();
        tooth.src = '../assets/' + this.chosenModel + '/' + value + '.png';
        let toothKI = new Konva.Image({
          name: value,
          x: this.teethPositionX,
          y: this.teethPositionY,
          image: tooth,
          draggable: true,
        });
        this.teeth.push(tooth);
        this.teethKi.push(toothKI);
        tooth.onload = () => {
          // add the shape to the layer
          toothKI.zIndex(this.layerCount);
          toothKI.width(196);
          toothKI.height((196 / tooth.width) * tooth.height);
          this.teethLayer.add(toothKI);
          this.layerCount = this.layerCount + 1;
          // toothKI.cache();
          // toothKI.filters([Konva.Filters.RGBA]);
          // toothKI.red(dentalShades["A1"].red).blue(dentalShades["A1"].blue).green(dentalShades["A1"].green).alpha(0.4);
        };
      });


      loading.dismiss();

      this.transform = new Konva.Transformer({
        centeredScaling: true,
        enabledAnchors: [ 'bottom-right'],
        anchorSize:15
      });
      this.teethLayer.add(this.transform);
      this.transform.nodes(this.teethKi);
      this.transform.zIndex(this.layerCount);
    }

  }
  choseTeethPerModel(ev: any) {
    this.t_model = ev.detail.value;
    console.log(ev.detail.value)
    if (this.chosenTeeth != ev.detail.value) {
      this.chosenTeeth = ev.detail.value;
      if (this.chosenTeeth != "0") {
        this.transform.detach()
        this.chosenTeeth = ev.detail.value;
        this.teethKi.forEach((value) => {
          console.log(value.getAttr("name"))
          if (value.getAttr("name") == this.chosenTeeth) {
            // console.log("I am here");
            value.setAttr("opacity", 1)
            this.transform.nodes([value])
            value.setAttr("draggable", true)
            value.zIndex(this.layerCount - 1)
          }
          else {
            value.setAttr("opacity", 0.7)
            value.setAttr("draggable", false)
            value.zIndex(2)
          }
        });
      }
      else {
        this.transform.detach()
        this.layerCount = 1;
        this.teethKi.forEach((value) => {
          value.setAttr("opacity", 1);
          value.setAttr("draggable", true);
          value.zIndex(this.layerCount)
          this.layerCount = this.layerCount + 1;
        });
        this.transform.nodes(this.teethKi);
        this.transform.zIndex(this.layerCount)
      }
    }
  }



  choseColor(ev: any) {
    this.t_color = ev.detail.value;
    console.log(ev.detail.value)
    if (this.chosenColor != ev.detail.value) {
      this.chosenColor = ev.detail.value;
      if (this.chosenColor != "0") {
        this.teethKi.forEach((value) => {
          value.cache();
          value.filters([Konva.Filters.RGBA]);
          value.red(dentalShades[this.chosenColor].red).blue(dentalShades[this.chosenColor].blue).green(dentalShades[this.chosenColor].green).alpha(0.4);
        });
      }
      else {
        this.teethKi.forEach((value) => {
          value.clearCache();
          value.filters([]);
        });
      }
    }
  }

  async finalize() {
      // const loading = await this.loadingController.create({
      //   message: 'Loading',
      //   spinner: 'bubbles'
      // });
      // await loading.present();
    let tooths = this.teeth;
    this.status = false;

    console.log(this.backgroundLayer.getChildren()[0])
    this.backgroundLayer.getChildren()[0].setAttrs({ image: this.imageObj3,zIndex:3 });
    for (let j = 0; j < tooths.length; j++) {
      this.teethKi[j].setAttr("opacity", 1)
        // this.teethKi[j].setAttr("draggable", false)
        this.teethKi[j].zIndex(1)
     }

  }


  design() {
    let navigationExtras: NavigationExtras = {
      state: {
        _id: this._id
      }
    };

    this.router.navigate(['/risos'], navigationExtras);
  }


  circle() {

  }




  go() {
    // console.log("go")
    // console.log(this._id)

    this.servicegql.mutate({
      p_id: this._id,
      d_id: localStorage.getItem(ID)
    }).subscribe(res => {
      // this.s_id=res.data.createService.service.id;
      // console.log(res.data.createService.service.id);
      this.s_id = res.data.createService.service.id;
      // console.log(this.s_id)
      let navigationExtras: NavigationExtras = {
        state: {
          s_id: this.s_id,
        }
      };
      // console.log(this.s_id);
      this.router.navigate(['/lab-c'], navigationExtras);
    })


  }

  reload(){
    location.reload();
  }

  export() {
    this.backgroundLayer.zIndex(99);
    this.transform.remove()//TODO: remove teeth from background image and change the z index of the teeth
    var data = this.stage.toDataURL();
    var data = atob(data.substring("data:image/png;base64,".length)),
      asArray = new Uint8Array(data.length);

    for (var i = 0, len = data.length; i < len; ++i) {
      asArray[i] = data.charCodeAt(i);
    }

    var blob = new Blob([asArray.buffer], { type: "image/png" });
    let navigationExtras: NavigationExtras = {
      state: {
        image: blob,
        _id:this._id,
        ratio:this.ratio,
        color:this.t_color,
        model:this.t_model

      }
    };

    this.router.navigate(['/comparison'], navigationExtras);
    // console.log(blob)
  }
  // e
}
