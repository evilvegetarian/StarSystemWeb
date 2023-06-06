import { Component, OnInit } from '@angular/core';
import { StarSystem } from 'src/app/models/star-system';
import { StarSystemService } from 'src/app/service/star-system.service';

@Component({
  selector: 'app-StarSystemList',
  templateUrl: './StarSystemList.component.html',
  styleUrls: ['./StarSystemList.component.css']
})
export class StarSystemListComponent implements OnInit {
  starSystems: StarSystem[]=[];

  constructor(private starSystemService:StarSystemService) { }

  ngOnInit() {
    this.starSystemService.getStarSystems().subscribe(data => {
      this.starSystems = data;
    });
  }
  
  deleteStarSystem(id: number) {
    this.starSystemService.deleteStarSystem(id).subscribe(() => {
      this.starSystems = this.starSystems.filter(ss => ss.id !== id);
    });
  }
}
