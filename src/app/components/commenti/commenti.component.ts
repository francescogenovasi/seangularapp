import { Component, OnInit } from '@angular/core';
import {CommentiService} from "../../services/commenti.service";
import {Commenti} from "../../models/commenti";

@Component({
  selector: 'app-commenti',
  templateUrl: './commenti.component.html',
  styleUrls: ['./commenti.component.scss']
})
export class CommentiComponent implements OnInit {

  commenti: Commenti[] = [];
  newCommento: Commenti = {} as Commenti;

  constructor(private commentiService: CommentiService ) { }

  ngOnInit(): void {
    this.commentiService.getCommenti().subscribe(data => {
      this.commenti = data;
      console.log(this.commenti);
    });

    this.newCommento = {
      title: "Nuovo post",
      body: 'Descrizione del nuovo post'
    }

    this.commentiService.createCommento(this.newCommento).subscribe(data =>{
      console.log(data);
      this.commenti.unshift(data);
    })
  }

}
