import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@capacitor-community/camera-preview';
import { Directory, Filesystem } from '@capacitor/filesystem';

@Component({
  selector: 'app-capturex',
  templateUrl: './capturex.page.html',
  styleUrls: ['./capturex.page.scss'],
})
export class CapturexPage implements OnInit {

  close_icon:boolean = true;
  myImage=null;
  cameraActive = false;
  result = null;
  count = 1;
  constructor(private router:Router) {

  }
  public ngOnInit():void
  {
    // this.cleanStorage();
  }
  async cleanStorage() {
    for (let i = 1; i<5; i=i+1)
    {
      if(localStorage.getItem('photos_'+i))
      {
        const removeFile = await Filesystem.deleteFile({
          path : localStorage.getItem('photos_'+i)  ,
          directory: Directory.Data,
        })
        localStorage.removeItem('photos_'+i);
        localStorage.removeItem('photos_4');
      }
    }
  }
  private async savePicture(value) {
    // Convert photo to base64 format, required by Filesystem API to save
    // Write the file to the data directory
    const base64Data = value;
    // Write the file to the data directory
    // const fileName = new Date().getTime() + '.png';
    const fileName = new Date().getTime() + '.png';

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
      recursive: true
    });
    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory

    return {
      filepath: fileName,
    };
  }

  openCamera() {
    const cameraPreviewOptions: CameraPreviewOptions = {
      position: 'rear',
      parent: 'cameraPreview',
      className: 'cameraPreview',
      disableAudio: false,
      storeToFile: true,
    };
    CameraPreview.start(cameraPreviewOptions);
    this.cameraActive = true;
  }
  async captureCamera() {
    const cameraPreviewPictureOptions: CameraPreviewPictureOptions = {
      quality: 100
    };

    this.result = await CameraPreview.capture(cameraPreviewPictureOptions);
    this.result = await this.savePicture(this.result.value);
    const readFile = await Filesystem.readFile({
      path: this.result.filepath,
      directory: Directory.Data
    });
    this.myImage=`data:image/png;base64,${readFile.data}`;
    // this.myImage=this.result;

    this.cameraActive = false;
    this.count = this.count +1;
    CameraPreview.stop();
  }
  async saveImage()
  {
    localStorage.setItem('photos_'+(this.count-1), this.result.filepath);
    if(this.count !=5)
    {
      this.openCamera();
    }
    else{
      this.cameraActive = false;
    }
  }
  async redoImage()
  {
    const removeFile = await Filesystem.deleteFile({
      path : this.result.filepath,
      directory: Directory.Data,
    })
    this.count = this.count -1;
    this.openCamera();
  }
  async submit()
  {
    this.cameraActive = false;
    // console.log("submit");
    CameraPreview.stop();
    let navigationExtras: NavigationExtras = {
      state: {
        status: 1
      }
    };
    this.router.navigate(['/create-patient'],navigationExtras)
    // at the end may be?
    // this.cleanStorage();
  }
}
