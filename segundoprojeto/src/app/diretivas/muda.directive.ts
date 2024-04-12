import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[muda]'
})
export class MudaDirective {

  constructor() { }
  @HostBinding("style.color") cor="red"
  @HostListener('click') mudaFonte(){
    this.cor = 'green'
  }

}
