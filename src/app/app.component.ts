import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  

  selectedGender: string= '';
selectChangeHandler(event: any){
  this.selectedGender=event.target.value;
}
  getData(){
    alert("FORM SUBMITTED")
  }
}
