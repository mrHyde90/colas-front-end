import { Injectable } from '@angular/core';
import Ticket from '../classes/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketListService {
  public ticketList: Ticket[] = [];

  constructor() { }

  addTicket(nuevoTicket: Ticket){
    this.ticketList.push(nuevoTicket);
  }

  
}
