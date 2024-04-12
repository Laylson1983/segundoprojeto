import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  texto =''
  clique(event:any){ console.log(event.target)
  this.texto = event.target.value}
}
