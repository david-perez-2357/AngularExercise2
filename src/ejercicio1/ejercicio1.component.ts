import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatIcon} from '@angular/material/icon';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef, MatNoDataRow,
  MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

interface student {
  name: string,
  age: number,
  grade: number
}

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatInput,
    MatSelect,
    MatOption,
    MatIcon,
    MatTable,
    MatCell,
    MatHeaderCell,
    MatRow,
    MatHeaderRow,
    MatColumnDef,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderCellDef,
    MatCellDef,
    FormsModule,
    MatNoDataRow,
    NgIf,
  ],
  templateUrl: './ejercicio1.component.html',
  styles: ``
})
export class Ejercicio1Component {
  students: student[] = [
    {name: 'Juan', age: 20, grade: 8},
    {name: 'Pedro', age: 21, grade: 7},
    {name: 'Jorge', age: 22, grade: 4},
    {name: 'Maria', age: 22, grade: 9},
    {name: 'Ana', age: 19, grade: 10},
    {name: 'Luis', age: 20, grade: 8},
    {name: 'Carlos', age: 21, grade: 2},
  ];
  AllStudents: student[] = this.students;
  displayedColumns: string[] = ['name', 'age', 'grade', 'state'];
  nameFilter: string = '';
  stateFilter: number = 1;

  filterTable() {
    this.students = this.filterStudents(this.nameFilter, this.stateFilter);
  }

  filterStudents(name: string, state: number) {
    const filterGrade = (student: student, state: number): boolean => {
      if (state == 2) {
        return student.grade >= 5;
      }else if (state == 3) {
        return student.grade < 5;
      } else {
        return true;
      }
    }

    return this.AllStudents.filter(student => {
      return student.name.toLowerCase().includes(name.toLowerCase()) && filterGrade(student, state);
    });
  }
}
