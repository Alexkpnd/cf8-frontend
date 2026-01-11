import { Component } from '@angular/core';
import { Step2PersonTable } from './components/step2-person-table/step2-person-table';
import { Step3PersonTableInput } from './components/step3-person-table-input/step3-person-table-input';
import { Person } from './shared/interfaces/person';
import { Step4ForDirective } from './components/step4-for-directive/step4-for-directive';

@Component({
  selector: 'app-root',
  imports: [Step2PersonTable, Step3PersonTableInput, Step4ForDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   name = "Alex";

   // Step 3 Input Component
   person1: Person = {
    firstname: 'User1 Name',
    lastname: 'User1 Surname',
    email: 'user1@aueb.gr'
   }

   person2: Person = {
    firstname: 'User2 name',
    lastname: 'User2 Surname',
    email: 'user2@aueb.gr'
   }
}
