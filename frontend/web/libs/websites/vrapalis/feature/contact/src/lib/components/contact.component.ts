import {Component} from '@angular/core';

@Component({
  selector: 'web-contact',
  template: `
    <form>
      <h1>Contact <strong>me</strong></h1>
      <mat-form-field class="example-full-width" appearance="standard">
        <mat-label>Email</mat-label>
        <input type="email" matInput placeholder="Ex. pat@example.com" matTooltip="Email address">
        <mat-icon matSuffix>email</mat-icon>
        <mat-hint>Errors appear instantly!</mat-hint>
        <mat-error>
          Please enter a valid email address
        </mat-error>
        <mat-error>
          Email is <strong>required</strong>
        </mat-error>
      </mat-form-field>

      <mat-form-field appearance="standard" class="mt-3">
        <mat-label>Telephone</mat-label>
        <span matPrefix>+1 &nbsp;</span>
        <input type="tel" matInput placeholder="555-555-1234" matTooltip="Phone number">
        <mat-icon matSuffix>phone_android</mat-icon>
        <mat-hint>Errors appear instantly!</mat-hint>
        <mat-error>
          Please enter a valid phone number
        </mat-error>
      </mat-form-field>

      <mat-form-field appearance="standard" class="mt-3">
        <mat-label>Leave a comment</mat-label>
        <textarea matInput placeholder="Ex. It makes me feel..." matTooltip="Your questions"></textarea>
        <mat-icon matSuffix>mode_edit</mat-icon>
      </mat-form-field>

      <button mat-flat-button matTooltip="Submit the form" class="mt-5">Submit</button>
    </form>
  `,
  styles: [`
    form {
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    mat-form-field {
      width: 40%;
    }
  `]
})
export class ContactComponent {


}
