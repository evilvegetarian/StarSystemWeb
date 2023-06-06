import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarSystem } from 'src/app/models/star-system';
import { StarSystemService } from 'src/app/service/star-system.service';

@Component({
  selector: 'app-StarSystemDetail',
  templateUrl: './StarSystemDetail.component.html',
  styleUrls: ['./StarSystemDetail.component.css']
})
export class StarSystemDetailComponent implements OnInit {
  starSystem!: StarSystem;


  constructor(
    private starSystemService: StarSystemService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.starSystemService.getStarSystem(+id!).subscribe(data => {
      this.starSystem! = data;
    });

  }
}