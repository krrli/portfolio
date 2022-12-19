import { Skills } from './../_interfaces/skills';
import { Injectable } from '@angular/core';
//import { FirestoreModule, getFirestore } from '@angular/fire/firestore';

 import { AngularFirestore } from "@angular/fire/compat/firestore";


@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private firestore: AngularFirestore) { }

  read_Skills() {
    console.log('read skills');

    return this.firestore.collection('skills').snapshotChanges();
  }

  getSkillsByCategory(category: string) {

    return this.firestore.collection<Skills>('skills', ref => ref.where('category', '==', category)).snapshotChanges();
  }

  getSkillsOrderedByTitle() {
    return this.firestore.collection<Skills>('skills', ref => ref.orderBy('title')).snapshotChanges();
  }
}
