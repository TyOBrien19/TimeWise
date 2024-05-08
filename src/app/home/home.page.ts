import { CommonModule} from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

import { IonHeader, IonFooter, IonToolbar, IonTitle, 
  IonContent, IonItem, IonLabel, IonInput, IonButton, 
  IonList, IonCheckbox, IonIcon, IonTabButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonTabButton, IonHeader, IonFooter, IonToolbar, IonTitle, IonContent, 
    IonItem, IonLabel, IonInput, IonButton, IonList, IonCheckbox, 
    FormsModule, CommonModule, IonIcon]
})

export class HomePage  {

  todos: { text: string, isChecked: boolean }[] = [];

  
  constructor(private router: Router, private storage: Storage) {
    this.storage.create().then(() => {
      this.storage.get('todos').then((data) => {
        this.todos = data || []; // Load notes from storage if available, otherwise use empty array
      });
    });
  }

  addNewNote() {
    this.todos.push({ text: '', isChecked: false })
    this.storeTodos();
  }

  clearInputs() {
    this.todos = [];
    this.storage.remove('todos');
  }

  ngOnInit() {
    this.storage.create().then(() => {
      // Get stored data or initialize empty list
      this.getStoredTodos();
    });
  }

  async getStoredTodos() {
    const storedTodos = await this.storage.get('todos');
    this.todos = storedTodos || []; // Initialize empty list if no data found
  }

  async storeTodos() {
    this.storage.set('todos', this.todos);
    this.storeTodos();
  }

  ////////////////////////////////////////////////////////////

  goToHomePage() 
  {
    this.router.navigate(['/home']);
    this.storeTodos();
  }

  goToCalendarPage()
  {
    this.router.navigate(['/calendar']);
    this.storeTodos();
  }

  goToNotesPage(){
    this.router.navigate(['/notes']);
    this.storeTodos();
  }

  goToTimerPage(){
    this.router.navigate(['/timer']);
  }
  


}
