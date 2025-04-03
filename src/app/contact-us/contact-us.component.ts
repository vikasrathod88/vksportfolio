import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule, NgIf],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  onSubmit(contactForm: NgForm) {
    if (contactForm.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('access_key', '56f66bb4-c56c-49a6-a6b1-bb29c637ed28'); // Replace with your Web3Forms key
    formData.append('name', contactForm.value.name);
    formData.append('email', contactForm.value.email);
    formData.append('message', contactForm.value.message);

    this.http.post('https://api.web3forms.com/submit', formData)
      .subscribe({
        next: () => {
          this.showMessage('success', 'Your message has been sent successfully!');
          contactForm.resetForm();
        },
        error: () => {
          this.showMessage('error', 'Something went wrong. Please try again!');
        }
      });
  }

  showMessage(type: 'success' | 'error', message: string) {
    if (type === 'success') {
      this.successMessage = message;
      this.errorMessage = '';
    } else {
      this.errorMessage = message;
      this.successMessage = '';
    }

    // Hide message after 2 seconds
    setTimeout(() => {
      this.successMessage = '';
      this.errorMessage = '';
    }, 4000);
  }




  // successMessage = '';
  // errorMessage = '';

  // constructor(private http: HttpClient) {}

  // onSubmit(contactForm: NgForm) {
  //   debugger;
  //   if (contactForm.invalid) {
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append('access_key', '56f66bb4-c56c-49a6-a6b1-bb29c637ed28'); // Replace with your Web3Forms key
  //   formData.append('name', contactForm.value.name);
  //   formData.append('email', contactForm.value.email);
  //   formData.append('message', contactForm.value.message);
  //   debugger;
  //   this.http.post('https://api.web3forms.com/submit', formData)
  //     .subscribe({
  //       next: () => {
  //         this.successMessage = 'Your message has been sent successfully!';
  //         this.errorMessage = '';
  //         contactForm.resetForm();
  //       },
  //       error: () => {
  //         this.successMessage = '';
  //         this.errorMessage = 'Something went wrong. Please try again!';
  //       }
  //     });
  // }






}
