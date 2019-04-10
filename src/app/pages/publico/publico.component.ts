import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import Ticket from '../../classes/ticket';
@Component({
  selector: 'app-publico',
  templateUrl: './publico.component.html',
  styleUrls: ['./publico.component.css']
})
export class PublicoComponent implements OnInit {

  public mesa1:any = {nombre: "Desocupada", mesa: "mesa1", qrcode: "Desocupado"};
  public mesa2:any = {nombre: "Desocupada", mesa: "mesa2", qrcode: "Desocupado"};
  public mesa3:any = {nombre: "Desocupada", mesa: "mesa3", qrcode: "Desocupado"};
  public mesa4:any = {nombre: "Desocupada", mesa: "mesa4", qrcode: "Desocupado"};



  constructor(public wsService: WebsocketService) { }

  ngOnInit() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove('container');
    this.escucharSockets();
  }

  escucharSockets(){
    this.wsService.listen("nuevo-aparte")
      .subscribe((newConsumidor: {nombre: string, mesa: string}) => {
        console.log("Dentro del publio");
        console.log(newConsumidor);
        switch(newConsumidor.mesa){
          case "mesa1":
            this.mesa1 = newConsumidor;
            break;
          case "mesa2":
            this.mesa2 = newConsumidor;
            break;
          case "mesa3":
            this.mesa3 = newConsumidor;
            break;
          case "mesa4":
            this.mesa4 = newConsumidor;
            break;
        }
      });

  }

}
