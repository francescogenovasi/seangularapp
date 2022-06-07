import { Component, OnInit } from '@angular/core';
import {PetService} from "../../services/pet.service";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.petService.getPets().subscribe(data =>{
      console.log(data);
    })
  }

}
