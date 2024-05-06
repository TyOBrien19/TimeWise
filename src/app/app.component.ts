import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, HttpClientModule, FormsModule],
})



export class AppComponent {
  constructor() {}
}