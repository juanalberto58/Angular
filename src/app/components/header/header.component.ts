import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit{


  /*Constructor*/
  constructor() {
    console.log("Component Header Creandose!")
   }

  /*Se ejecuta una vez que se ha creado el componente satisfactoriamente*/
   ngOnInit():void {
    console.log("Component Header ya creado!")
   }

}
