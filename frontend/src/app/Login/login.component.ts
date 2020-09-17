import { Component } from '@angular/core'
import {FormBuilder, Validator, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

//Esto le marca a angular que esto es un component y setea ciertas caracteristicas
@Component({
    selector: 'login-form',
    templateUrl: './HTML/login.component.html',
    styleUrls:['./CSS/register.component.css'],
    
    
})
export class LoginComponent {


form;

DOMAIN = "http://localhost:4200/"

    constructor(private fb: FormBuilder, private auth:AuthService){
        this.form = fb.group(
            {
                email:['',[Validators.required,emailValid()]],
                password:['',Validators.required],
            }
        )
        

        
    }

    isValid(control){
        return this.form.controls[control].invalid && this.form.controls[control].touched;
    }

    onSubmit(){
        console.log(this.form);
        this.auth.login(this.form.value);
    }
    
    get domain(){
        return this.DOMAIN;
    }

}

function emailValid() {
    return control => {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        return regex.test(control.value) ? null : { invalidEmail: true }
    }
}
