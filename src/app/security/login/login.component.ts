import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import {MatSnackBar} from '@angular/material/snack-bar';

import { LoginModel } from '../models';
import { LoginService } from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit, OnDestroy {
  private unSubscribe: Subject<void> = new Subject<void>();

  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)])
    });
  }

  ngOnDestroy(): void {
    this.unSubscribe.complete();
  }

  onClick(user: LoginModel){
    this.loginService.login(user)
      .pipe(takeUntil(this.unSubscribe))
      .subscribe({
        next: () => this.router.navigate(['/movie']),
        error: (err) => this.openSnackBar(err)
      });
  }

  openSnackBar(message: string) {
    this.loginForm.reset();
    this.snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }

}
