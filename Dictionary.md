# Crear Contenedor y Templates
 ## Contenedor    
   `<ng-container></ng-container>`
 ## Templates
   `<ng-template></ng-template>`

# Condición If en una etiqueta
 ## Ejemplo
   Utilizaremos ***ngIf**
   - `<ng-container *ngIf=""></ng-container>`

# Acciones
  ## OnInit
  - **Import** - import { Component, OnInit } from '@angular/core'
  - **Intro clase** - export class HeaderComponent implements OnInit{
  - **Función ngOnInit()** - Se ejecuta cuando se ha creado el componente correctamente


# Acciones en etiquetas
 ## Crear acción de click en un botón
  Utilizaremos **(click)**
   ### Ejemplo
   - `<button (click)=""></button>`

# Interfaces, Enumeraciones y Casting
  ## Interfaces
  - `export interface usuario`
  - Similar a un struct, sirve para definir la estructura que tendrá un objeto con datos. [Ejemplo](./src/app/components/other/interfaces.ts)
  ## Enumeración
  - `enum UserType`
  - Es una lista de opciones. [Ejemplo](./src/app/components/other/interfaces.ts)
    