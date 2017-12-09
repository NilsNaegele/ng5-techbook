const GALLERY_IMAGES_PATH = './assets/images';

export class Image {

  fileName: string;
  title: string;

  get ImagePath(): string {
    return `${GALLERY_IMAGES_PATH}/${this.fileName}`;
  }

  constructor(fields?) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

}
