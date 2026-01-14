import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-list-group-menu',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './list-group-menu.html',
  styleUrl: './list-group-menu.css',
})
export class ListGroupMenu {

  userService = inject(UserService);
  user = this.userService.user;

  menu = [
    {text:"Step 2 Person Table", link:'person-table-example'},
    {text:"Step 3 Component Input", link:'component-input-example'},
    {text:"Step 4 @For Directive", link: 'for-directive-example'},
    {text:"Step 5 Event bind", link:'event-bind-example'},
    {text:'Step 6 Simple datatable', link:'simple-datatable-example'},
    {text:'Step 7 Component Output', link:'component-output-example'},
    {text:'Step 8 Template Driven Forms', link:'template-driven-form-example'},
    {text:'Step 9 Reactive Froms', link: 'reactive-form-example'},
    {text:'Step 10 User Login', link:'login-example'}
  ]
}
