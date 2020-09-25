import { Component } from '@angular/core'
import {FormBuilder, Validator, Validators} from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {AuthService} from '../auth.service';


//Esto le marca a angular que esto es un component y setea ciertas caracteristicas
@Component({
    moduleId: module.id,
    selector: 'register-form',
    templateUrl: './HTML/register.component.html',
    styleUrls:['./CSS/register.component.css'],
    
    // {{messages[0].text}}'//{{messages.length}}'
})
export class Register {
    form;


    //aqui le inyectamos el authService a nuestro componente para que agarre info de ahí
    //lo mismo por el FormBuilder
    constructor(private fb: FormBuilder, private auth:AuthService){
        this.form = fb.group(
            {
                firstName:['',Validators.required],
                lastName:['',Validators.required],
                email:['',[Validators.required,emailValid()]],
                direccion:['',Validators.required],
                password:['',Validators.required],
                confirmPassword:['',Validators.required],
            },
            {
                validator:matchingFields('password','confirmPassword')
            }
        )
        

        
    }

    onSubmit(){
        console.log(this.form);
        this.auth.register(this.form.value);
    }
    //esto se llama al inicializar el componente
    isValid(control){
        return this.form.controls[control].invalid && this.form.controls[control].touched;
    }

}

function matchingFields(field1, field2){
     return form =>{
         if(form.controls[field1].value !== form.controls[field2].value)
            return {mismatchedFields:true}
     }
}

function emailValid() {
    return control => {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        return regex.test(control.value) ? null : { invalidEmail: true }
    }
}