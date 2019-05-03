import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  mesa = "";
  nombre = "";

  constructor(private wsService: WebsocketService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has("mesa")){
        this.mesa = paramMap.get("mesa");
        this.nombre = paramMap.get("nombre");
      }
    });
    console.log("Aqui");
    console.log(this.mesa);
        console.log(this.nombre);


  }

  onSignup(f: NgForm){
    //console.log("Dentro del submt");
    //console.log(f);
    const consumidor:any = {nombre: this.nombre, mesa: this.mesa};  
    //console.log(f.value);
    this.wsService.emit("apartar-mesa", consumidor);
    this.router.navigate(['/qr', {'nombre': consumidor["nombre"], 'mesa': consumidor["mesa"]}], );
    //this.router.navigate(['/qr'] );
  }

}
