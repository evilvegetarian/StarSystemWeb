import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceObject } from 'src/app/models/space-object';
import { SpaceObjectService } from 'src/app/service/space-object.service';

@Component({
  selector: 'app-SpaceObjectDetail',
  templateUrl: './SpaceObjectDetail.component.html',
  styleUrls: ['./SpaceObjectDetail.component.css']
})
export class SpaceObjectDetailComponent implements OnInit {
  spaceObject!: SpaceObject;

  constructor(
    private spaceObjectService: SpaceObjectService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.spaceObjectService.getSpaceObject(+id!).subscribe(data => {
      this.spaceObject = data;
    });
  }
}
