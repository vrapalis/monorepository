import { Component, AfterViewInit } from '@angular/core';
import jsQR from 'jsqr';
import { interval } from 'rxjs';


@Component({
  selector: 'web-browser-private-container',
  template: `
    <div>
<!--      <video id='player' height='300' width='300' controls autoplay></video>-->
<!--      <button id='capture'>Capture</button>-->
<!--      <canvas id='canvas' hidden width='320' height='240'></canvas>-->
      <web-browser-private></web-browser-private>
    </div>
  `,
  styles: []
})
export class PrivateContainerComponent implements AfterViewInit {

  constructor() {
  }

  ngAfterViewInit(): void {
// Get access to the camera!
//     const player = document.getElementById('player') as HTMLVideoElement;
//     const canvas = document.getElementById('canvas') as HTMLCanvasElement;
//     const context = canvas.getContext('2d');
//     const captureButton = document.getElementById('capture');
//
//     const constraints = {
//       video: true, audio: false
//     };
//
//     const subscription = interval(1000).subscribe(value => {
//
//       // Draw the video frame to the canvas.
//       context.drawImage(player, 0, 0, canvas.width, canvas.height);
//       const imageData = context.getImageData(0, 0, 300, 300);
//       // @ts-ignore
//       const code = jsQR(imageData.data, imageData.width, imageData.height);
//       if (code) {
//         console.log('Found QR code', code);
//         subscription.unsubscribe();
//       }
//
//     });

    // Attach the video stream to the video element and autoplay.
    // navigator.mediaDevices.getUserMedia(constraints)
    //   .then((stream) => {
    //     player.srcObject = stream;
    //   });
  }

}
