import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss']
})
export class RegisterComponentComponent {
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
  });

  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        mobile: ['', [Validators.required,]],
      },
    );
  }

  onSubmit(){
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }


}
