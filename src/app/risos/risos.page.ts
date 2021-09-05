import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { PatientGQL, ServiceGQL } from 'src/generated/graphql';
import { ID } from '../constants';

@Component({
  selector: 'app-risos',
  templateUrl: './risos.page.html',
  styleUrls: ['./risos.page.scss'],
})
export class RisosPage implements OnInit {

  rec = document.getElementById('rec');
  image = document.getElementById('image');
  drag: boolean = false;
  _id:any;
  smileImage:any;
  s_id: string;
  constructor( private renderer:Renderer2,private route:ActivatedRoute , private router:Router , private patientgql:PatientGQL , private servicegql:ServiceGQL) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this._id = this.router.getCurrentNavigation().extras.state._id;
        // console.log("smile _id")
        // console.log(this._id);
      }
    });

   }

  ngOnInit() {

    var myid = "Patient:"+ this._id;
    // console.log(id)
    this.patientgql.watch({
      id:myid
    }).valueChanges.subscribe(res=>{
      this.smileImage = res.data.Patient.patientPic.smileImage;
      console.log(this.smileImage)
    })

    var image = document.getElementById('image');
    image.style.background = 'http://37.152.185.177:8000/mediafiles/IMG_6031_eueyw3O.jpeg';

    var rec = document.getElementById('rec');
    var rec2 = document.getElementById('rec2');
    // var rec3 = document.getElementById('rec3');
    var dr: boolean;
    var dr2: boolean;
    // var dr3: boolean ;
    // var dragStart;
    // var dragEnd;

    var rec_tr = document.getElementById('rec_tr');
    var rec_tl = document.getElementById('rec_tl');
    var rec_bl = document.getElementById('rec_bl');
    var rec_br = document.getElementById('rec_br');
    var resize: boolean = false;

    var pos1: number;
    var pos2: number;
    var pos3: number;
    var pos4: number;

    var pos12: number;
    var pos22: number;
    var pos32: number;
    var pos42: number;

    rec.addEventListener('mousedown', function (event) {
      console.log("down");
      event.preventDefault();
      dr = true;
      pos3 = rec.offsetLeft - event.clientX;
      pos4 = rec.offsetTop - event.clientY;
      // document.appendChild(rec)
    });

    rec.addEventListener('touchstart', function (event) {
      console.log("down");
      event.preventDefault();
      dr = true;
      pos3 = rec.offsetLeft - event.changedTouches[0].clientX;
      pos4 = rec.offsetTop - event.changedTouches[0].clientY;
      // document.appendChild(rec)
    });

    // rec2.addEventListener('mousedown', function (event) {
    //   console.log("down2");
    //   event.preventDefault();
    //   dr2 = true;
    //   pos32 = rec2.offsetLeft- event.clientX;
    //   pos42 = rec2.offsetTop - event.clientY;
    // });


    // rec3.addEventListener('mousedown', function (event) {
    //   console.log("down3");
    //   var off_l = document.getElementById("rec3").offsetLeft;
    //   var off_t = document.getElementById("rec3").offsetTop;
    //   dr3 = true;
    // });


    rec_tr.addEventListener('mousedown', function (event) {
      resize=true;
      event.preventDefault()
      window.addEventListener('mousemove', resize_f)
      window.addEventListener('mouseup', stopResize)
      // console.log("tr is clicked")
    });

    rec_tr.addEventListener('touchstart', function (event) {
      resize=true;
      console.log("tr touched")
      // event.changedTouches[0].pa
      event.preventDefault()
      window.addEventListener('touchmove', resize_ft)
      window.addEventListener('touchend', stopResizet)

      // console.log("tr is clicked")
    });

    rec_tl.addEventListener('mousedown', function (event) {
      resize=true;
      event.preventDefault()
      window.addEventListener('mousemove', resize_tl)
      window.addEventListener('mouseup', stopResize_tl)
      // console.log("tr is clicked")
    });

    rec_tl.addEventListener('touchstart', function (event) {
      resize=true;
      event.preventDefault()
      window.addEventListener('touchmove', resize_tlt)
      window.addEventListener('touchend', stopResize_tlt)
      // console.log("tr is clicked")
    });

    rec_bl.addEventListener('mousedown', function (event) {
      // resize=true;
      // event.preventDefault()
      window.addEventListener('mousemove', resize_bl)
      window.addEventListener('mouseup', stopResize_bl)
      // console.log("tr is clicked")
    });

    rec_bl.addEventListener('touchstart', function (event) {
      resize=true;
      event.preventDefault()
      window.addEventListener('touchmove', resize_blt)
      window.addEventListener('touchend', stopResize_blt)
      // console.log("tr is clicked")
    });


    rec_br.addEventListener('mousedown', function (event) {
      resize=true;
      event.preventDefault()
      window.addEventListener('mousemove', resize_br)
      window.addEventListener('mouseup', stopResize_br)
      // console.log("tr is clicked")
    });

    rec_br.addEventListener('touchstart', function (event) {
      resize=true;
      event.preventDefault()
      window.addEventListener('touchmove', resize_brt)
      window.addEventListener('touchend', stopResize_brt)
      // console.log("tr is clicked")
    });


    function resize_f(e) {
      if(resize){
      rec.style.width = e.pageX - rec.getBoundingClientRect().left + 'px'
      rec.style.height = e.pageY - rec.getBoundingClientRect().top + 'px'
      }
    }

    function resize_ft(e) {
      if(resize){
      rec.style.width = e.changedTouches[0].pageX - rec.getBoundingClientRect().left + 'px'
      rec.style.height = e.changedTouches[0].pageY - rec.getBoundingClientRect().top + 'px'
      }
    }

    function resize_tl(e) {
      if(resize){
      rec.style.width = e.pageX - rec.getBoundingClientRect().left + 'px'
      rec.style.height = e.pageY - rec.getBoundingClientRect().top + 'px'
      }
    }

    function resize_tlt(e) {
      if(resize){
      rec.style.width = e.changedTouches[0].pageX - rec.getBoundingClientRect().left + 'px'
      rec.style.height = e.changedTouches[0].pageY - rec.getBoundingClientRect().top + 'px'
      }
    }

    function resize_bl(e) {
      if(resize){
      rec.style.width = e.pageX - rec.getBoundingClientRect().left + 'px'
      rec.style.height = e.pageY - rec.getBoundingClientRect().top + 'px'
      }
    }

    function resize_blt(e) {
      if(resize){
      rec.style.width = e.changedTouches[0].pageX - rec.getBoundingClientRect().left + 'px'
      rec.style.height = e.changedTouches[0].pageY - rec.getBoundingClientRect().top + 'px'
      }
    }

    function resize_br(e) {
      if(resize){
      rec.style.width = e.pageX - rec.getBoundingClientRect().left + 'px'
      rec.style.height = e.pageY - rec.getBoundingClientRect().top + 'px'
      }
    }

    function resize_brt(e) {
      if(resize){
      rec.style.width = e.changedTouches[0].pageX - rec.getBoundingClientRect().left + 'px'
      rec.style.height = e.changedTouches[0].pageY - rec.getBoundingClientRect().top + 'px'
      }
    }

    function stopResize() {
      window.removeEventListener('mousemove', resize_f)
      resize = false;
    }

    function stopResizet() {
      window.removeEventListener('mousemove', resize_ft)
      resize = false;
    }

    function stopResize_tl() {
      window.removeEventListener('mousemove', resize_tl)
      resize = false;
    }

    function stopResize_tlt() {
      window.removeEventListener('mousemove', resize_tlt)
      resize = false;
    }

    function stopResize_bl() {
      window.removeEventListener('mousemove', resize_bl)
      resize =false;
    }

    function stopResize_blt() {
      window.removeEventListener('mousemove', resize_blt)
      resize=false;
    }

    function stopResize_br() {
      window.removeEventListener('mousemove', resize_br)
      resize = false;
    }

    function stopResize_brt() {
      window.removeEventListener('mousemove', resize_brt)
      resize = false;
    }

    // rec_tr.addEventListener('mousemove', function (event) {
    //   // dr=false;
    //   // console.log("tr_move")
    // });

    // rec_tr.addEventListener('mouseup', function (event) {
    //   resize = false;
    //   // console.log(tr)
    // });

    rec.addEventListener('mousemove', function (event) {
      // console.log("moving")
      // event = event || window.event;
      console.log(dr && !resize)
      event.preventDefault();
      if (dr && !resize) {
        // rec.style.left = event.pageX - rec.offsetWidth / 2 + 'px';
        // rec.style.top = event.pageY - rec.offsetHeight / 2 + 'px';
        pos1 = pos3 - event.clientX;
        pos2 = pos4 - event.clientY;

        rec.style.left = (event.clientX + pos3) + "px";
        rec.style.top = (event.clientY + pos4) + "px";
      }

    });


    rec.addEventListener('touchmove', function (event) {
      // console.log("moving")
      // event = event || window.event;
      console.log(dr && !resize)
      event.preventDefault();
      if (dr && !resize) {
        // rec.style.left = event.pageX - rec.offsetWidth / 2 + 'px';
        // rec.style.top = event.pageY - rec.offsetHeight / 2 + 'px';
        pos1 = pos3 - event.changedTouches[0].clientX;
        pos2 = pos4 - event.changedTouches[0].clientY;

        rec.style.left = (event.changedTouches[0].clientX + pos3) + "px";
        rec.style.top = (event.changedTouches[0].clientY + pos4) + "px";
      }

    });

    rec.addEventListener('mouseout', function (event) {
      dr = false;
    });

    rec.addEventListener('touchend', function (event) {
      dr = false;
    });
    // rec2.addEventListener('mouseout', function (event) {
    //   dr2 = false;
    // });
    // rec3.addEventListener('mouseout', function (event) {
    //   dr3 = false;
    // });
    // rec4.addEventListener('mouseout', function (event) {
    //   dr4 = false;
    // });


    // rec2.addEventListener('mousemove', function (event){
    //   // console.log("moving2")
    //   // event = event || window.event;
    //   event.preventDefault();
    //   if (dr2) {
    //     // rec.style.left = event.pageX - rec.offsetWidth / 2 + 'px';
    //     // rec.style.top = event.pageY - rec.offsetHeight / 2 + 'px';
    //     pos12 = pos32 - event.clientX;
    //     pos22 = pos42 - event.clientY;

    //     rec2.style.left = (event.clientX + pos32) + "px";
    //     rec2.style.top = (event.clientY + pos42) + "px";
    //   }
    // });

    // rec3.addEventListener('mousemove', function (event) {
    //   // console.log(event.pageY - rec.offsetHeight / 2 + 'px)
    //   // console.log((event.pageY - rec.offsetHeight / 2 + 'px'))
    //     if(dr3){
    //     // console.log("here" , rec.style.left);
    //     var off_l = document.getElementById("rec3").offsetLeft;
    //     var off_t = document.getElementById("rec3").offsetTop;
    //     // dragEnd = {
    //     //   x: event.pageX - off_l,
    //     //   y: event.pageY - off_t
    //     // }
    //     rec3.style.left = event.pageX - rec3.offsetWidth / 2 + 'px';
    //     rec3.style.top = event.pageY - rec3.offsetHeight / 2 + 'px';
    //     // drag = false;
    //   }

    // });


    rec.addEventListener('mouseup', function (event) {
      dr = false;
      console.log("mouseup");
    });

    // rec2.addEventListener('mouseup', function (event){
    //   dr2= false;
    //   console.log("mouseup")
    //  });

    //  rec3.addEventListener('mouseup', function (event) {
    //   dr3 = false;
    //   console.log("mouseup");
    // });

  }


  mousedown(event) {
    console.log("mousedown")
    this.drag = true;
    var rec = document.getElementById('rec');
    rec.style.position = 'absolute';
    rec.style.zIndex = "1000"
    document.body.append(this.rec);

    // centers the ball at (pageX, pageY) coordinates

    // move our absolutely positioned ball under the pointer
    // this.moveAt(event.pageX, event.pageY);

    // (2) move the ball on mousemove
    // rec.addEventListener('mousemove', this.onMouseMove);

    // (3) drop the ball, remove unneeded handlers
    // rec.onmouseup = function() {
    //   document.removeEventListener('mousemove', onmousemove);
    //   rec.onmouseup = null;
    // };;
  }


  evaluate(){
    var rec = document.getElementById('rec');
    rec.style.background = "none";
    rec.style.backgroundImage = "url('http://37.152.185.177:8000/mediafiles/profile/teeth.png')";
    rec.style.opacity="0.9";
    rec.style.backgroundSize= "cover";
    rec.style.backgroundRepeat = "no-repeat";
    // rec.style.height = "100%";
    // rec.style.width = "100%";
  }



  fullwhite(){
    const mask = document.getElementById('rec');
    this.renderer.setStyle(
      mask,
      'filter',
      `invert(100%) sepia(100%) saturate(0%) hue-rotate(206deg) brightness(103%) contrast(101%)`
    )
    // mask.style.filter = invert(99%) sepia(1%) saturate(6054%) hue-rotate(265deg) brightness(128%) contrast(94%);
  }

  white(){
    const mask = document.getElementById('rec');
    this.renderer.setStyle(
      mask,
      'filter',
      `invert(98%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(93%) contrast(91%)`
    )
    // mask.style.filter = invert(99%) sepia(1%) saturate(6054%) hue-rotate(265deg) brightness(128%) contrast(94%);
  }


  finish(){
    console.log("go")
    console.log(this._id)

    this.servicegql.mutate({
      p_id:"3",
      d_id:localStorage.getItem(ID)
    }).subscribe(res=>{
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
    })


  }


  mouseup() {
    // var rec = document.getElementById('rec');
    // document.removeEventListener('mousemove', onmousemove);
    // rec.onmouseup = null;
    this.drag = false;
    console.log("mouseup")
  }

  moveAt(pageX, pageY) {
    var rec = document.getElementById('rec');
    rec.style.left = pageX - rec.offsetWidth / 2 + 'px';
    rec.style.top = pageY - rec.offsetHeight / 2 + 'px';
  }

  onMouseMove(event) {
    console.log("mousemove")
    var rec = document.getElementById('rec');
    if (this.drag) {
      // this.moveAt(event.pageX, event.pageY);
      rec.style.left = event.pageX - rec.offsetWidth / 2 + 'px';
      rec.style.top = event.pageY - rec.offsetHeight / 2 + 'px';
    }
  }
  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(e) {
  //   console.log(e);
  // }

}
