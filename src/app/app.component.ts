import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { AdministradorService } from './service/administrador/administrador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'TapiceriaFronend';

  constructor(
    public formadmin: FormGroup,
    public fb: FormBuilder,
    public administradorService: AdministradorService
  ) {}
  ngOnInit(): void {
    this.formadmin = this.fb.group({
      ci: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      clave: ['', Validators.required],
    });
  }

  guardar(): void {}
}
