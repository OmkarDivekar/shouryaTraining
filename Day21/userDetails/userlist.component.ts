import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
@Input('PropUser') UserData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
