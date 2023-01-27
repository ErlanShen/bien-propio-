import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'seguro'
})
export class SeguroPipe implements PipeTransform {

  constructor(private domsanitizer: DomSanitizer) { }
  transform(value: any, tipo: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (tipo) {
      case 'html':
        return this.domsanitizer.bypassSecurityTrustHtml(value)
      case 'style':
        return this.domsanitizer.bypassSecurityTrustStyle(value)
      case 'script':
        return this.domsanitizer.bypassSecurityTrustScript(value)
      case 'url':
        return this.domsanitizer.bypassSecurityTrustUrl(value)
      case 'resourceUrl':
        return this.domsanitizer.bypassSecurityTrustResourceUrl(value)
      default:
        console.error('Tipo no encontrado: ' + tipo)
    }
  }

}
