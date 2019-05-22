import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() registerMode = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) { }
u
  ngOnInit() {
  }

  register() {
    this.authService.register(this.model)
      .subscribe(
        () => console.log('registered successfully'),
        error => console.log(error)
      );
  }

  cancel() {
    this.registerMode.emit(false);
    console.log('cancelled');
  }
}
