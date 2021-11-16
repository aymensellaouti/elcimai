import { Pipe, PipeTransform } from '@angular/core';
const DEFAULT_IMAGE = 'cv.png';
@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string | undefined): string | undefined {
    if (path && path.trim().length) {
      return path;
    }
    return DEFAULT_IMAGE;
  }
}
