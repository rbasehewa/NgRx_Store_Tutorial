import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

const counterReducer = (state = 0, action : any) =>{
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

const productsReducer = (state = [], action : any) =>{
  switch(action.type){
    case 'ADD':
      return [...state, {...action.payload}];
    default:
      return state;
  }
};


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter: counterReducer,
      // products: productsReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
