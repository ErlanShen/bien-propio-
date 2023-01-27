import { Attribute, Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[confirmador]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: ConfirmadorDirective,
      multi: true
    }
  ]
})
export class ConfirmadorDirective implements Validators {

  constructor(@Attribute("confirmador") public clave: string) {


  }

  validate(formulario: FormControl) {
    const contra = formulario.root.get(this.clave)
    const confirmar = formulario
    if (confirmar.value === null) {
      return null
    }
    if (contra) {
      const subs: Subscription = contra.valueChanges.subscribe(() => {
        confirmar.updateValueAndValidity()
        subs.unsubscribe()
      })
    }
    return contra && contra.value !== confirmar.value ? { confirmador: true } : null
  }

}
