import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
usuarios: any[] =  []
setUsuario(nome: string, senha: string, dataNascimento: string){
let data = new Date()
let hora = data.getHours()
let minuto = data.getMinutes()
let segundo = data.getSeconds()
  let usuario= { nome: nome, senha: senha, dataNascimento: dataNascimento, dataCadastro: `${hora}:${minuto}:${segundo}`
}
this.usuarios.push(usuario)
}

}