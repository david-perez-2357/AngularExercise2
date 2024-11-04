import { Routes } from '@angular/router';
import {Ejercicio1Component} from '../ejercicio1/ejercicio1.component';
import {Ejercicio2Component} from '../ejercicio2/ejercicio2.component';

export const routes: Routes = [
  {'path': 'Ejercicio1', 'component': Ejercicio1Component},
  {'path': 'Ejercicio2', 'component': Ejercicio2Component},
  {'path': '', 'redirectTo': 'Ejercicio1', 'pathMatch': 'full'},
  {'path': '**', 'redirectTo': 'Ejercicio1', 'pathMatch': 'full'}
];
