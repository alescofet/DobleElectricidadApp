import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['Juan Pérez'],
      email: ['juan.perez@example.com'],
      registrationDate: ['2023-01-15'],
      address: ['Calle Falsa 123']
    });
  }

  ngOnInit(): void {
    //Comprobamos si hay datos en el sessionStorage y se aplican en caso de haberlos
    if(sessionStorage.getItem('name')){
      this.profileForm.get("name")?.setValue(sessionStorage.getItem("name"))
    }
    if(sessionStorage.getItem('email')){
      this.profileForm.get("email")?.setValue(sessionStorage.getItem("email"))
    }
    if(sessionStorage.getItem('registrationDate')){
      this.profileForm.get("registrationDate")?.setValue(sessionStorage.getItem("registrationDate"))
    }
    if(sessionStorage.getItem('address')){
      this.profileForm.get("address")?.setValue(sessionStorage.getItem("address"))
    }

  }

  onSubmit(): void {
    //En caso de que el formulario sea valido se guardan los nuevos datos en el sessionStorage
    if (this.profileForm.valid) {
      sessionStorage.setItem('name', this.profileForm.get('name')?.value)
      sessionStorage.setItem('email', this.profileForm.get('email')?.value)
      sessionStorage.setItem('registrationDate', this.profileForm.get('registrationDate')?.value)
      sessionStorage.setItem('address', this.profileForm.get('address')?.value)
      console.log('Datos actualizados:', this.profileForm.value);
    }
  }
}
