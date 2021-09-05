import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


import Konva from 'konva';
@Component({
  selector: 'app-photoeditor',
  templateUrl: './photoeditor.component.html',
  styleUrls: ['./photoeditor.component.scss'],
})
export class PhotoeditorComponent implements OnInit {

  status: boolean;
  focus: number;
  stage: Konva.Stage
  transform: Konva.Transformer
  teeth: Array<HTMLImageElement>
  teethKi: Array<Konva.Image>
  ngOnInit(): void {
    var width = 400;
    var height = 600;
    this.teeth = [];
    this.teethKi = []
    this.stage = new Konva.Stage({
      container: 'container',
      width: width,
      height: height,
    });

    var layer = new Konva.Layer();
    this.stage.add(layer);

    // main API:
    var imageObj = new Image();
    imageObj.src = '../assets/Retractory.jpg';
    var yoda = new Konva.Image({
      name: 'person',
      x: 0,
      y: 0,
      image: imageObj,
      width: 388,
      height: 541,
      draggable: false,
    });
    imageObj.onload = function () {
      // add the shape to the layer
      layer.add(yoda);
      yoda.zIndex(0);
    };

    // alternative API:

    for (let i = 1; i < 11; i = i + 1) {
      let tooth = new Image();
      tooth.src = '../assets/fullTeeth/Layer ' + i + '.png';
      let toothKI = new Konva.Image({
        x: 50,
        y: 50,
        image: tooth,
        // width: 196,
        // height: 56,
        draggable: true,
      });
      this.teeth.push(tooth);
      this.teethKi.push(toothKI);
      tooth.onload = function () {
        // add the shape to the layer
        layer.add(toothKI);
        toothKI.zIndex(i);
      };

    }
    this.transform = new Konva.Transformer();
    layer.add(this.transform);

    // by default select all shapes
    this.transform.nodes(this.teethKi);
    this.transform.zIndex(12);
  }

  result(e): void {
    console.log(this.focus, e.target.value)
    this.focus = e.target.value;
    console.log(this.focus, e.target.value)
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

  finalize() {
    let tooths = this.teeth;
    this.status = false;
    var imageObj3 = new Image();
    imageObj3.src = '../assets/Smile.jpg';
    console.log(this.stage.getLayers()[0].getChildren()[0].setAttrs({ image: imageObj3 }));
    for (let j = 0; j < tooths.length-1; j++) {
      this.teethKi[j].setAttr("opacity", 1)
        this.teethKi[j].setAttr("draggable", false)
        this.teethKi[j].zIndex(2)
     }

  }

  export(){
  //   this.transform.remove()//TODO: remove teeth from background image and change the z index of the teeth
  //   var data = this.stage.toDataURL();
  //   var data = atob(data.substring("data:image/png;base64,".length)),
  //     asArray = new Uint8Array(data.length);

  //   for (var i = 0, len = data.length; i < len; ++i) {
  //     asArray[i] = data.charCodeAt(i);
  //   }

  //   var blob = new Blob([asArray.buffer], { type: "image/png" });
  //   let navigationExtras: NavigationExtras = {
  //     state: {
  //       image: blob,
  //       _id:this._id
  //     }
  //   };

  //   this.router.navigate(['/comparison'], navigationExtras);
  }

}

