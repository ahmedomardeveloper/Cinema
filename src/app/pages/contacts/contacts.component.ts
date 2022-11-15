import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactsForm = new FormGroup(
    {
      firstName: new FormControl('', [Validators.minLength(3), Validators.maxLength(16), Validators.required]),
      lastName: new FormControl('', [Validators.minLength(3), Validators.maxLength(16), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]{11}")]),
      messageTitle: new FormControl('', [Validators.required]),
      messageBody: new FormControl('', [Validators.required, Validators.minLength(4)])
    }

  );
  contactList: any[] = []
  saveFormData() {
    this.contactList.push(this.contactsForm.value)
    console.log(this.contactList)

  }

  constructor() { }

  ngOnInit(): void {
  }

}
