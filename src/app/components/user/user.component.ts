import { Component } from '@angular/core';
import {Usuario, UserType} from '../other/interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent{

  constructor() { }

  isLogged: boolean = false

  user:Usuario={
    ID: 1,
    Nombre: "Alex",
    Apellidos: "Lopez",
    Nick: "Alex",
    Email: "alex@gmail.com",
    Contraseña: "1234",
    Tipo: UserType.Administrador 
  }


}
