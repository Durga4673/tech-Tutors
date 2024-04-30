import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { SheetService } from '../services/sheet.service';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';


@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss']
})
export class RegisterComponentComponent {


  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];


  form!: FormGroup;
  submitted = false;

  City: any = ['Java', 'Data Science', 'AWS', 'Python']

  private apiUrl = 'https://script.google.com/macros/s/AKfycbwoL7A03UEfLGTLTDoUYwSYLki0JPy3QCvmw7kCOdkEwWf_PM4DW1T_09ufkmcnUHAJ/exec';


  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private service : SheetService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        mobile: ['', [Validators.required]],
        timeZone: ['', Validators.required],
        courseName: ['', [Validators.required]],
        acceptTerms: [false, Validators.requiredTrue],
      },
    );
  }

  
  
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(formData: any): void {
    this.submitted = true;
  
    if (this.form.invalid) {
      return;
    }
    const fullname = this.form.value.fullname;
    const email = this.form.value.email;
    const mobile = this.form.value.mobile;
    const timeZone = this.form.value.timeZone;
    const courseName = this.form.value.courseName;
  
    this.service.createSheet(fullname, email, mobile, timeZone, courseName).subscribe({
      next: (res) => {
        console.log(res);
        this.form.reset();
        this.submitted = false;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
