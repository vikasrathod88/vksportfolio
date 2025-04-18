import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  imports: [FormsModule, NgFor],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  messages: { user: string; text: string }[] = [];
  messageText = '';

  sendMessage() {
    if (this.messageText.trim()) {
      this.messages.push({ user: 'You', text: this.messageText });
      this.messageText = '';
    }
  }
}
