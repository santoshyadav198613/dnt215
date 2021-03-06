import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  id = 0;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((res) => this.id = +  res.get('id'));
    this.router.queryParamMap.subscribe((res) => console.log(res.get('todo')));
  }

}
