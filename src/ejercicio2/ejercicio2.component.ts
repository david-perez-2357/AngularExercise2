import {Component, inject, model} from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {NgForOf} from '@angular/common';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatLabel} from '@angular/material/form-field';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';

interface customImg {
  src: string,
  alt: string,
  description: string
}

const uniqueImages: customImg[] = [
  {src: 'https://www.w3schools.com/w3images/lights.jpg', alt: 'Aurora boreal', description: 'En esta imagen puedes ver la aurora boreal en la noche'},
  {src: 'https://www.w3schools.com/w3images/nature.jpg', alt: 'La Naturaleza', description: 'En esta imagen puedes ver la naturaleza en su esplendor'},
  {src: 'https://www.w3schools.com/w3images/mountains.jpg', alt: 'Las Montañas', description: 'En esta imagen puedes ver las montañas en la tarde'},
  {src: 'https://www.w3schools.com/w3images/forest.jpg', alt: 'El Bosque', description: 'En esta imagen puedes ver el bosque en la mañana'},
  {src: 'https://www.w3schools.com/w3images/snow.jpg', alt: 'La Nieve', description: 'En esta imagen puedes ver la nieve en pleno día'},
];


@Component({
  selector: 'app-image-preview-modal',
  standalone: true,
  templateUrl: './image-preview-modal.component.html',
  imports: [
    MatLabel,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle
  ],
  styles: ``
})

export class ImagePreviewModalComponent {
  readonly dialogRef = inject(MatDialogRef<ImagePreviewModalComponent>);
  readonly data: customImg = inject<customImg>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    NgForOf,
    MatGridList,
    MatGridTile
  ],
  templateUrl: './ejercicio2.component.html',
  styles: ``
})

export class Ejercicio2Component {
  // Quiero que la lista tenga 12 elementos, pero si tengo 5 imagenes, no puedo solo repetirlas 2 veces, porque serian mas de 12 elementos
  images: customImg[] = uniqueImages.concat(uniqueImages).concat(uniqueImages.slice(0, 2));
  imagesPerRow: number = 3;
  readonly dialog = inject(MatDialog);

  decideImagesPerRow() {
    if (window.innerWidth > 1600) {
      this.imagesPerRow = 4;
    }else if (window.innerWidth > 1300) {
      this.imagesPerRow = 3;
    }else if (window.innerWidth > 1010) {
      this.imagesPerRow = 2;
    }else {
      this.imagesPerRow = 1;
    }
  }

  ngOnInit() {
    this.decideImagesPerRow();

    window.onresize = () => {
      this.decideImagesPerRow();
    }
  }

  onImageClick(image: customImg) {
    console.log(image);
    const dialogRef = this.dialog.open(ImagePreviewModalComponent, {
      data: image
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
