import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Component({
  selector: 'app-firebase-study',
  templateUrl: './firebase-study.component.html',
})
export class FirebaseStudyComponent implements OnInit {
  angularFireList: AngularFireList<any>;
  courses$: any;
  student$;

  constructor(private firebaseDB: AngularFireDatabase) {
  }

  ngOnInit(): void {
    this.angularFireList = this.firebaseDB.list('/course');
    this.courses$ = this.angularFireList.valueChanges();
    this.student$ = this.firebaseDB.object('/students/1').valueChanges();
    console.log('courses$', this.courses$);
    console.log(this.student$);
  }

  addCourse(course: HTMLInputElement) {
    this.angularFireList.push(course.value);
    course.value = '';
  }
}
