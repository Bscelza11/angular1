import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/login.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  name = '';
  suscription: Subscription;

  constructor(private loginService: LoginService) {
    this.suscription = this.loginService.getNameUser().subscribe(data => {
      data = this.name;
      
   });
  }

  ngOnInit(): void {
    
  }

  mostrar() {
    console.log(this.name)
  }

  


}
