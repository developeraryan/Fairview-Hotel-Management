import { Injectable } from '@angular/core';
import { Database, set, ref, update , onValue } from '@angular/fire/database';

@Injectable({providedIn: 'root'})
export class DataService {
   constructor( private db : Database) {
    
   }
   getAllData() {
    const dbRef = ref(this.db, 'alldata/');
    onValue(dbRef, (snapshot)=> {
        const data = snapshot.val();
        console.log("Server Data", data);
    } )
   }
} 