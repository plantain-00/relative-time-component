import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { RelativeTimeModule } from '../dist/'
import { MainComponent } from './main.component'

@NgModule({
  imports: [BrowserModule, FormsModule, RelativeTimeModule],
  declarations: [MainComponent],
  bootstrap: [MainComponent]
})
export class MainModule { }
