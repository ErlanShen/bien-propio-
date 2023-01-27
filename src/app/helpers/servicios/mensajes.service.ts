import { Injectable } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  public mostrarCarga$ = new BehaviorSubject<boolean>(false);
  public elPorcentaje$ = new BehaviorSubject<number[]>([]);
  constructor(private mensajes: MessageService, private confirmation: ConfirmationService) { }
  /* mesajes toast */
  showSuccess(mensaje: string) {
    this.mensajes.add({ severity: 'success', summary: 'Exito!', detail: mensaje });
  }
  Error(reject:string) {
    this.mensajes.add({ severity: 'error', summary: 'Error!', detail: reject });
  }
  Warning(reject: string) {
    this.mensajes.add({ severity: 'warn', summary: 'Se ha realizado ', detail: reject });
  }


  /* mesajes ConfirmDialog */
  confirmador(mensaje: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.confirmation.confirm({
        message: mensaje,
        accept: () => {
          resolve(true)
        },
        reject: () => {
          reject("Se rechazo borrar "+mensaje)
        }
      })
    })
  }

  cargador(mensaje: string, porcentaje?: number[]) {
    this.mostrarCarga$.next(true)
    this.elPorcentaje$.next(porcentaje)
  }

  cerrarCargador() {
    this.mostrarCarga$.next(false)
    this.elPorcentaje$.next([])
  }
  noGuardado() {
    this.mensajes.clear()
    this.mensajes.add({ key: 'c', sticky: true, severity: 'info', summary: 'Tiene cambios sin guardar', closable: false});
  }
  onConfirm() {
    this.mensajes.clear('c')
  }
  onReject() {
    this.mensajes.clear('c')
  }
}
