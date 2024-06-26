import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomePage } from './home/home.page';
import { CalendarPage } from './calendar/calendar.page';
import { NotesPage } from './notes/notes.page';
import { TimerPage } from './timer/timer.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'calendar',
    loadComponent: () => import('./calendar/calendar.page').then( m => m.CalendarPage)
  },
  {
    path: 'notes',
    loadComponent: () => import('./notes/notes.page').then( m => m.NotesPage)
  },
  {
    path: 'timer',
    loadComponent: () => import('./timer/timer.page').then( m => m.TimerPage)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}