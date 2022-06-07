import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../models/user";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {

  @ViewChild('userForm') form : any;

  name: string = ''; // proprietà
  surname: string = '';

  showDetails: boolean = true;

  user: User = {} as User; //inizializzo un oggetto di tipo user

  users: User[] = []; //empty array of users

  isEnabled: boolean = true;

  currentClass: {} = {}; //creo classe generica

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
      console.log('I am in ngOnInit');

      this.currentClass = {
        'btn-success': this.isEnabled,
        'big-text': this.isEnabled
      }

      this.name = 'Pinco';
      this.surname = 'Pallino';

      this.user = { //empty user
        name: '',
        surname: '',
        email: '',
        birthdate: new Date()
      }

      this.usersService.getUsers().subscribe(data => {
        this.users = data;
        console.log(data);
      });
  }

  ngAfterViewInit() {
      console.log('I am in afterViewInit');
  }

  fireEvent(event: any){
    console.log(event.type);
  }

  addNewUser(){
    this.users.unshift(this.user);
  }

  onSubmit(form: any){
    console.log(form);
    this.user.name = form.form.value.name;
    this.user.surname = form.form.value.surname;
    this.user.email = form.form.value.email;

    // this.users.unshift(this.user);
    this.usersService.createUser(this.user);
  }

}


















