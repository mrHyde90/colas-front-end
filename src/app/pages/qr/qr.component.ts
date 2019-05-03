import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {
  public lol:string = "Pasarlo a la mesa de Carlos Carrion";
  mesa = "";
  nombre = "";

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has("mesa")){
        this.mesa = paramMap.get("mesa");
        this.nombre = paramMap.get("nombre");
        this.lol = "Pasarlo a la " + this.mesa + " de " + this.nombre;
      }
    });
  }

}
