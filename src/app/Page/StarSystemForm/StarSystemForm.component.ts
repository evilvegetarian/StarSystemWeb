import { SpaceObject } from './../../models/space-object';
import { StarSystemService } from './../../service/star-system.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-StarSystemForm',
  templateUrl: './StarSystemForm.component.html',
  styleUrls: ['./StarSystemForm.component.css']
})
export class StarSystemFormComponent implements OnInit {
  starSystemForm!: FormGroup;
  isEditMode = false;
  spaceObjects:SpaceObject[]=[];

  constructor(private fb:FormBuilder,
              private starSystemService:StarSystemService,
              private route: ActivatedRoute,
              private router:Router) 
              { }

  ngOnInit() {
  this.starSystemForm=this.fb.group({
    id: 0,
    name: ['', Validators.required],
    age: ['', Validators.required],
    massCenterId:null,
    });
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.starSystemService.getStarSystem(+id)
        .pipe(
          tap(data => {
            this.starSystemForm.setValue({
              id: data.id,
              name: data.name,
              age: data.age,
              massCenterId: data.massCenterId,
            });
            this.spaceObjects = data.spaceObjects;
          })
        )
        .subscribe();
    }
  }
  onSubmit(){

    if (this.isEditMode) {
      this.starSystemService.updateStarSystem(this.starSystemForm.value).subscribe(()=>{
        this.router.navigate(['/liststar']);
      });
    }
    else{
      this.starSystemService.addStarSystems(this.starSystemForm.value).subscribe(()=>{
        this.router.navigate(['/liststar']);
      });
    }
  }
}
