import { NumeroCartelaModel } from "./numero-cartela.model"

export interface CartelaModel {
  id?: string
  numeros: NumeroCartelaModel[]
}