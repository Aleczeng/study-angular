import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-firebase-study',
  templateUrl: './firebase-study.component.html',
})
export class FirebaseStudyComponent implements OnInit {
  courses$: any;
  student$;

  constructor(private firebaseDB: AngularFireDatabase) {
  }

  ngOnInit(): void {
    this.courses$ = this.firebaseDB.list('/course').valueChanges();
    this.student$ = this.firebaseDB.object('/students/1').valueChanges();
    console.log('courses$', this.courses$);
    console.log(this.student$);
  }

  addCourse(course: HTMLInputElement) {
    this.firebaseDB.list('/course').push(course.value).then(resp => console.log(resp));
    course.value = '';
  }
}
