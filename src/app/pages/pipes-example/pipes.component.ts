import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  content1: string;
  text: string;
  limitedCount: number;

  ngOnInit() {
    this.limitedCount = 10;
    this.content1 = 'Compressing objects:Compressing objects:Compressing objects:Compressing objects:Compressing ' +
      'objects:Compressing objects:';
  }

}
