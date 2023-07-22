import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
declare var clm: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('videoElm') videoElm: ElementRef;
  @ViewChild('canvasElm') canvasElm: ElementRef;

  ngAfterViewInit(): void {
    this.startFaceTracking();
  }

  startFaceTracking(): void {
    const video = this.videoElm.nativeElement;
    const canvas = this.canvasElm.nativeElement;
    const ctrack = new clm.tracker();
    ctrack.init();

    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;

        video.addEventListener('play', () => {
          const ctx = canvas.getContext('2d');
          ctrack.start(video);

          function drawLoop() {
            requestAnimationFrame(drawLoop);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw a square on the canvas
            const faceRect = ctrack.getCurrentPosition();
            if (faceRect) {
              const [x, y, width, height] = getSquareCoordinates(faceRect);
              ctx.strokeStyle = 'red';
              ctx.strokeRect(x, y, width, height);
            }
          }
          drawLoop();
        });
      })
      .catch((error) => {
        console.error('Error al acceder a la cámara:', error);
      });
  }
}

function getSquareCoordinates(faceRect) {
  // Calculate the center of the face
  const centerX = (faceRect[13][0] + faceRect[1][0]) / 2;
  const centerY = (faceRect[7][1] + faceRect[16][1]) / 2;

  // Set the width and height of the square
  const width = Math.abs(faceRect[13][0] - faceRect[1][0]);
  const height = Math.abs(faceRect[7][1] - faceRect[16][1]);

  // Calculate the top-left coordinates of the square
  const x = centerX - width / 2;
  const y = centerY - height / 2;

  return [x, y, width, height];
}