import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Storage } from '@ionic/storage-angular';

import {IonHeader, IonFooter, IonToolbar, IonTitle, IonContent, 
  IonItem, IonLabel, IonInput, IonButton, IonList, IonCheckbox, IonDatetime, 
  IonCard, IonCardHeader, IonCardContent, IonIcon } from '@ionic/angular/standalone';


interface Note {
    title: string;
    content: string;
  }

@Component({
  selector: 'app-notes',
  templateUrl: 'notes.page.html',
  styleUrls: ['notes.page.scss'],
  standalone: true,
  imports: [IonHeader, IonFooter, IonToolbar, IonTitle, IonContent, 
    IonItem, IonLabel, IonInput, IonButton, IonList, IonCheckbox, IonDatetime, 
    IonCard, IonCardHeader, IonCardContent, FormsModule, CommonModule, IonIcon],
})

export class NotesPage {

  constructor(private router: Router, private storage: Storage) {
    this.storage.create().then(() => {
      this.storage.get('notes').then((data) => {
        this.notes = data || []; // Load notes from storage if available, otherwise use empty array
      });
    });
  }

  notes: Note[] = []; // Array to store note objects

  addNewNote() {
    this.notes.push({ title: '', content: '' });
     // Add new empty note object
  }

  saveNotes() {
    this.storage.set('notes', this.notes);
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    this.saveNotes();
  }


  goToHomePage() {
    this.router.navigate(['/home']);
  }

  goToCalendarPage() {
    this.router.navigate(['/calendar']);
  }

  goToNotesPage() {
    this.router.navigate(['/notes']);
  }

  goToTimerPage(){
    this.router.navigate(['/timer']);
  }

}
