import { Skills } from './../_interfaces/skills';
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

  getSkillsOrderedByCategory() {
    // return this.firestore.collection("skills").orderBy("category", "asc");
    return this.firestore.collection<Skills>('skills', ref => ref.orderBy('category'));
  }
}
