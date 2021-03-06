import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef, MatButton } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = { username: '', password: '', remember: false };
  constructor(private dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.dialogRef.close();
  }

}
