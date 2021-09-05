import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import {CameraPreviewOptions,CameraPreview, CameraPreviewPictureOptions} from '@capacitor-community/camera-preview';
import { Filesystem, Directory } from '@capacitor/filesystem';

@Component({
  selector: 'capture-component',
  templateUrl: 'capture.component.html',
  styleUrls: ['capture.component.scss'],
})
export class CaptureComponent {

  myImage = null;
  cameraActive = false;
  constructor() {}
  // private async readAsBase64(value) {
  //   // Fetch the photo, read as a blob, then convert to base64 format
  //   const response = await fetch(value);
  //   const blob = await response.blob();

  //   return await this.convertBlobToBase64(blob) as string;
  // }

  // convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
  //   const reader = new FileReader;
  //   reader.onerror = reject;
  //   reader.onload = () => {
  //       resolve(reader.result);
  //   };
  //   reader.readAsDataURL(blob);
  // });
  private async savePicture(value) {
    // Convert photo to base64 format, required by Filesystem API to save

    // Write the file to the data directory

    const base64Data = value;

    // Write the file to the data directory
    const fileName = new Date().getTime() + '.jpeg';
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
//   dataURItoBlob(dataURI) {
//     // convert base64 to raw binary data held in a string
//     // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
//     var byteString = atob(dataURI.split(',')[1]);

//     // separate out the mime component
//     var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

//     // write the bytes of the string to an ArrayBuffer
//     var ab = new ArrayBuffer(byteString.length);
//     var ia = new Uint8Array(ab);
//     for (var i = 0; i < byteString.length; i++) {
//         ia[i] = byteString.charCodeAt(i);
//     }

//     // write the ArrayBuffer to a blob, and you're done
//     var bb = new MSBlobBuilder();
//     bb.append(ab);
//     return bb.getBlob(mimeString);
// }
  openCamera()
  {
    const cameraPreviewOptions: CameraPreviewOptions = {
      position:'front',
      parent: 'cameraPreview',
      className: 'cameraPreview',
      disableAudio: false,
      storeToFile:true,
    };
    CameraPreview.start(cameraPreviewOptions);
    this.cameraActive = true;
  }
  async captureCamera()
  {
    const cameraPreviewPictureOptions: CameraPreviewPictureOptions = {
      quality: 100
    };

    const result = await CameraPreview.capture(cameraPreviewPictureOptions);
    var image = await this.savePicture(result.value);
    // console.log(await this.savePicture(result));
    // this.myImage = image;
    // console.log(image);
    const readFile = await Filesystem.readFile({
      path: image.filepath,
      directory: Directory.Data
  });

  // Web platform only: Load the photo as base64 data
    this.myImage = `data:image/jpeg;base64,${readFile.data}`;
    this.cameraActive = false;
    // const image = await Camera.getPhoto({
    //   quality: 90,
    //   allowEditing: true,
    //   resultType: CameraResultType.Uri,
    //   source: CameraSource.Camera
    // });

    // this.myImage = image.webPath;
  }
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    this.myImage = image.webPath;
  }
}
