import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StarSystem } from 'src/app/models/star-system';
import { SpaceObjectService } from 'src/app/service/space-object.service';
import { StarSystemService } from 'src/app/service/star-system.service';

@Component({
  selector: 'app-SpaceObjectForm',
  templateUrl: './SpaceObjectForm.component.html',
  styleUrls: ['./SpaceObjectForm.component.css']
})
export class SpaceObjectFormComponent implements OnInit {
  spaceObjectForm!: FormGroup;
  starSystems: StarSystem[]=[];
  isEditMode = false;

  constructor(
    private fb: FormBuilder, 
    private spaceObjectService: SpaceObjectService,
    private starSystemService: StarSystemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.starSystemService.getStarSystems().subscribe(data => {
      this.starSystems = data;
    });
    
    this.spaceObjectForm = this.fb.group({
      id: 0,
      name: ['', Validators.required],
      type: ['', Validators.required],
      age: ['', Validators.required],
      diameter: ['', Validators.required],
      mass: ['', Validators.required],
      starSystemId: ['', Validators.required],
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.spaceObjectService.getSpaceObject(+id).subscribe(data => {
        this.spaceObjectForm.setValue({
          id:data.id,
          name: data.name,
          type: data.type,
          age: data.age,
          diameter: data.diameter,
          mass: data.mass,          
          starSystemId: data.starSystemId,

        });
      });
    }
  }

  onSubmit() {
    if (this.isEditMode) {
      this.spaceObjectService.updateSpaceObject(this.spaceObjectForm.value).subscribe(()=>{
        this.router.navigate(['/listspace']);
      });
    } else {
      this.spaceObjectService.addSpaceObject(this.spaceObjectForm.value).subscribe(()=>{
        this.router.navigate(['/listspace']);
      });
    }
  }
}