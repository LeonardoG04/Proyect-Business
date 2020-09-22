import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/Core/_base/services/company.service';
import { Router } from '@angular/router';
import { Page } from 'src/app/Commons/page';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  ngOnInit(): void {
  }

}
