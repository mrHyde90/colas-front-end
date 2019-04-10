import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import Ticket from '../../classes/ticket';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-nuevo-ticket',
  templateUrl: './nuevo-ticket.component.html',
  styleUrls: ['./nuevo-ticket.component.css']
})
export class NuevoTicketComponent implements OnInit {
  public elTicket: Ticket = new Ticket(0, "");

  constructor(private wsService: WebsocketService) { }

  ngOnInit() {
    
  }

  onSubmitComment(f: NgForm){
    console.log("Dentro del submit");
    console.log(f);
    const consumidor:any = {nombre: f.value.nombre, mesa: f.value.mesa}; 
    console.log(consumidor);
    this.wsService.emit("apartar-mesa", consumidor);
  }

}
