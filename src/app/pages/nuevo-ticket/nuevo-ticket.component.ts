import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import Ticket from '../../classes/ticket';

@Component({
  selector: 'app-nuevo-ticket',
  templateUrl: './nuevo-ticket.component.html',
  styleUrls: ['./nuevo-ticket.component.css']
})
export class NuevoTicketComponent implements OnInit {
  public elTicket: Ticket = new Ticket(0, "");

  constructor(private wsService: WebsocketService) { }

  ngOnInit() {
    this.cargarSockets();
  }

  cargarSockets(){
    // Escuchando nuevo ticket
    this.wsService.listen("ticket-nuevo")
      .subscribe((nuevoTicket: Ticket) => {
        console.log("Nuevo generado");
        console.log(nuevoTicket);
        this.elTicket = nuevoTicket;
      });


  }

  generarTicket(){
    this.wsService.emit("guardar-ticket");
  }

}
