import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  content1: string;

  ngOnInit() {
    this.content1 = 'Compressing objects:Compressing objects:Compressing objects:Compressing objects:Compressing ' +
      'objects:Compressing objects:';
  }

}
