export interface Usuario {
  uid?:string,
  displayName?:string,
  email?:string,
  emailVerified?:boolean,
  photoURL?:string,
  rol?: Roles,
  favorito?: string[],
  publicados?: string[],
}

export enum Roles {
  CLIENTE,
  ADMIN,
  EDITOR,
  PROFESIONAL
}