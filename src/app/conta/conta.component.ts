import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.scss']
})
export class ContaComponent implements OnInit {

  @Input() numeroConta: number = 0;
  @Input() tipoConta: string = 'corrente | poupanca';
  @Input() titular: string = '';
  @Input() saldo: number = 0;
  @Input() class: string = '';
  @Output() sacar: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {    
  }

}
