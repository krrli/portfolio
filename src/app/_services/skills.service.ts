import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private firestore: AngularFirestore) { }

  read_Skills() {
    console.log("read skills");
    return this.firestore.collection('skills').snapshotChanges();
  }
}
