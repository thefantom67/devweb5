import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSub(){
    alert("Vous êtes authentififié ! Bonne commande");
    window.location.href='http://localhost:4200/';
  }

}
