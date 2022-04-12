import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = "Movies"
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }
onSearch(value: string) {
  console.log(value);
}
}
