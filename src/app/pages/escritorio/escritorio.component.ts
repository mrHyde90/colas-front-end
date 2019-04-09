import { Component, OnInit } from '@angular/core';
import Ticket from '../../classes/ticket';
import { WebsocketService } from '../../services/websocket.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-escritorio',
  templateUrl: './escritorio.component.html',
  styleUrls: ['./escritorio.component.css']
})
export class EscritorioComponent implements OnInit {
  public actualTicket: Ticket = new Ticket(0, "");
  private id: string;

  constructor(
      public wsService: WebsocketService, 
      private route: ActivatedRoute,
      private router: Router
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    const payload = {sala: `sala-${this.id}`}
    this.wsService.emit("obtener-ticket", payload);
    this.escucharSockets();
  }

  escucharSockets(){
    this.wsService.listen("ticket-sala")
      .subscribe((actualTicket: Ticket) => {
        console.log(actualTicket);
        this.actualTicket = actualTicket;
      });;
  }

  nextTicket(){
    this.wsService.emit("next-ticket", this.actualTicket);
  }

}
