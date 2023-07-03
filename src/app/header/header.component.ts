import { Component, OnInit } from '@angular/core';
import { faUser,faShoppingCart,faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  
  usericon = faUser;
  carticon=faShoppingCart
  search=faSearch
}
