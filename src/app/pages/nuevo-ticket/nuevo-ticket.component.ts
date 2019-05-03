import { Component, OnInit } from '@angular/core';
//import { WebsocketService } from '../../services/websocket.service';
import Ticket from '../../classes/ticket';
import { NgForm } from "@angular/forms";
import { Router} from '@angular/router';

@Component({
  selector: 'app-nuevo-ticket',
  templateUrl: './nuevo-ticket.component.html',
  styleUrls: ['./nuevo-ticket.component.css']
})
export class NuevoTicketComponent implements OnInit {
  mesas: String[] = ["mesa1", "mesa2", "mesa3", "mesa4"];
  chooseMesa:String;
  public elTicket: Ticket = new Ticket(0, "");

  constructor(/*private wsService: WebsocketService*/ private router: Router) { }

  ngOnInit() {
    
  }

  apartar(mesa:String){
    console.log("Apartado");
    console.log(mesa);
    this.chooseMesa = mesa;
  }

  onSubmitComment(f: NgForm){
    console.log("Dentro del submit");
    console.log(f);
    const consumidor:any = {nombre: f.value.nombre, mesa: this.chooseMesa}; 
    console.log(consumidor);
    //this.wsService.emit("apartar-mesa", consumidor);
    this.router.navigate(['/pago', {'nombre': consumidor["nombre"], 'mesa': consumidor["mesa"]}], );
  }
//this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });

}
