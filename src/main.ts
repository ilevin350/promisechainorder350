import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.html'
})
export class App {
  msg1: string = '';
  msg2: string = '';

  // This example illustrates how each link in a promise chain must wait
  // for the previous link to be settled (fulfilled or rejected) before
  // its then callback function is invoked.
  initChain(): void {
    this.msg1 = '';
    this.msg2 = '';
    // Create promise 1
    const promise1 = new Promise(
      // We won't be using the reject function, so we'll use the
      // optional syntax of only passing the resolve function to
      // the executor.
      (resolve) => {
        setTimeout(() => {
          resolve('Promise 1 fulfilled')
        }, 3000);
      }
    );
      
    promise1.then(
      (result) => {
        this.msg1 = <string>result;
        return new Promise(resolve => {
          setTimeout(() => resolve('Promise 2 fulfilled'), 1000);
        });
      }).then(
        (result) => {
          this.msg2 = <string>result;
        }
      ); 
  }
}

bootstrapApplication(App);
