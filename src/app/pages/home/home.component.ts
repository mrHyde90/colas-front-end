import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private wsService: WebsocketService) { }

  ngOnInit() {
    this.wsService.emit("obtener-tickets");
  }


  entrar(numero: number){
    if(!numero){return;}
    this.router.navigate(["/escritorio", numero]);
  }

}
