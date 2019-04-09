import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import Ticket from '../../classes/ticket';

@Component({
  selector: 'app-publico',
  templateUrl: './publico.component.html',
  styleUrls: ['./publico.component.css']
})
export class PublicoComponent implements OnInit {
  public sala1: Ticket = new Ticket(0, "");
  public sala2: Ticket = new Ticket(0, "");
  public sala3: Ticket = new Ticket(0, "");
  public sala4: Ticket = new Ticket(0, "");

  constructor(public wsService: WebsocketService) { }

  ngOnInit() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove('container');
    this.wsService.emit("next-salas");
    this.escucharSockets();
  }

  escucharSockets(){
    // Obteniendo todas las salas
    this.wsService.listen("listen-salas")
      .subscribe((salas: any) => {
        console.log(salas);
        this.sala1 = salas.sala1;
        this.sala2 = salas.sala2;
        this.sala3 = salas.sala3;
        this.sala4 = salas.sala4;
      });

    this.wsService.listen("ticket-sala")
      .subscribe((newTicket: Ticket) => {
        switch(newTicket.sala){
          case "sala-1":
            this.sala1 = newTicket;
            break;
          case "sala-2":
            this.sala2 = newTicket;
            break;
          case "sala-3":
            this.sala3 = newTicket;
            break;
          case "sala-4":
            this.sala4 = newTicket;
            break;
        }
      });

  }

}
