// import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Injectable()
export class UserService{
   public usersCustomerId: string;
   public a_f: any;
   constructor(public af: AngularFire){
        this.a_f = af;
   }

    getUserID()
    {
        return Promise.resolve(this.a_f.auth.subscribe(auth => {
            if(auth) { 
                this.usersCustomerId = auth.uid;     
            }
        }));
    }
}