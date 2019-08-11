import { Component, OnInit } from '@angular/core';
import { AntelopeUser } from '../users/antelope-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Component({
  selector: 'user-details-generator',
  templateUrl: './user-details-generator.component.html',
  styleUrls: ['./user-details-generator.component.css']
})
export class UserDetailsGeneratorComponent {
  generatedUser: AntelopeUser;

  constructor(private http: HttpClient) { 
  }

  generateUserDetails() {
    this.http.get('https://uinames.com/api/?region=united%20states').subscribe(randomData => {
        this.generatedUser = new AntelopeUser();
        this.generatedUser.firstName = randomData['name'];
        this.generatedUser.lastName = randomData['surname'];
        this.generatedUser.gender = randomData['gender'];
        this.generatedUser.email = this.generateEmail();
    });

  }

  generateEmail(): string {
    let timeStamp = Date.now();
    return `xsites.manual+${timeStamp}@gmail.com`
  }

}