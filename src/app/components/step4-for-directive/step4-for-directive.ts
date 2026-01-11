import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { Step3PersonTableInput } from '../step3-person-table-input/step3-person-table-input';
@Component({
  selector: 'app-step4-for-directive',
  imports: [Step3PersonTableInput],
  templateUrl: './step4-for-directive.html',
  styleUrl: './step4-for-directive.css',
})
export class Step4ForDirective {

  person: Person[] = [{"firstname":"Agosto","lastname":"Challener","email":"achallener0@t.co"},
  {"firstname":"Filide","lastname":"Biggadyke","email":"fbiggadyke1@ustream.tv"},
  {"firstname":"Jackqueline","lastname":"Naulls","email":"jnaulls2@hc360.com"},
  {"firstname":"Shermie","lastname":"Regus","email":"sregus3@surveymonkey.com"},
  {"firstname":"Marnia","lastname":"Theyer","email":"mtheyer4@artisteer.com"},
  {"firstname":"Galven","lastname":"Marrison","email":"gmarrison5@nytimes.com"},
  {"firstname":"Easter","lastname":"Shovelton","email":"eshovelton6@yolasite.com"},
  {"firstname":"Arline","lastname":"O' Neligan","email":"aoneligan7@1und1.de"},
  {"firstname":"Marnia","lastname":"Shavel","email":"mshavel8@java.com"},
  {"firstname":"Sybila","lastname":"Matthiesen","email":"smatthiesen9@google.es"},
  {"firstname":"Christoffer","lastname":"Wardesworth","email":"cwardeswortha@nba.com"},
  {"firstname":"Delia","lastname":"Hawsby","email":"dhawsbyb@zdnet.com"},
  {"firstname":"Auguste","lastname":"Marques","email":"amarquesc@icio.us"},
  {"firstname":"Howard","lastname":"Shireff","email":"hshireffd@google.de"},
  {"firstname":"Regan","lastname":"Foy","email":"rfoye@furl.net"},
  {"firstname":"Moise","lastname":"Bosanko","email":"mbosankof@constantcontact.com"},
  {"firstname":"Anderson","lastname":"Sebastian","email":"asebastiang@patch.com"},
  {"firstname":"Lilyan","lastname":"Stollwerk","email":"lstollwerkh@zimbio.com"},
  {"firstname":"Elayne","lastname":"Larne","email":"elarnei@exblog.jp"},
  {"firstname":"Eva","lastname":"Thomas","email":"ethomasj@plala.or.jp"}
  ]
}
