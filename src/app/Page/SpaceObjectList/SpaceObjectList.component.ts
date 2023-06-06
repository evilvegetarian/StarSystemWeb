import { Component, OnInit } from '@angular/core';
import { SpaceObject } from 'src/app/models/space-object';
import { SpaceObjectService } from 'src/app/service/space-object.service';

@Component({
  selector: 'app-SpaceObjectList',
  templateUrl: './SpaceObjectList.component.html',
  styleUrls: ['./SpaceObjectList.component.css']
})
export class SpaceObjectListComponent implements OnInit {
  spaceObjects: SpaceObject[]=[];

  constructor(private spaceObjectService: SpaceObjectService) { }

  ngOnInit() {
    this.spaceObjectService.getSpaceObjects().subscribe(data => {
      this.spaceObjects = data;
    });
  }

  deleteSpaceObject(id: number) {
    this.spaceObjectService.deleteSpaceObject(id).subscribe(() => {
      this.spaceObjects = this.spaceObjects.filter(so => so.id !== id);
    });
  }
}