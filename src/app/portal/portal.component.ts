import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit } from '@angular/core';
import { Colors } from '../core/models/colors.model';
import { ColorsService } from '../core/services/colors.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class PortalComponent implements OnInit {
  colorsList: Colors;
  color = {};
  total: number;
  page = 1;
  colorDisabled = false;
  colorSelected = '';
  constructor(
    public colorServ: ColorsService,
    public clipboard: Clipboard
  ) { }

  ngOnInit(): void {
    console.log(Object.values(this.color).length);
    this.allColors();
  }
  allColors(): void{
    this.colorServ.listColors(this.page.toString()).subscribe(async res => {
      this.colorsList = {... res};
      this.total = this.colorsList.total_pages;
    });
  }
  previous(): void{
    this.page = this.page - 1;
    this.allColors();
  }
  next(): void {
    this.page = this.page + 1;
    this.allColors();
  }
  colorSelect(id, color): void{
    this.color = this.colorsList.data.filter((item) => item.id === id)[0];
    this.colorSelected = color;
    this.clipboard.copy(color);
    if (Object.values(this.color).length !== 0){
      this.colorDisabled = true;
    }
  }
  returnList(): void{
    this.color = {};
    this.colorSelected = '';
    this.colorDisabled = false;
    this.allColors();
  }
}
