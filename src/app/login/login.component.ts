import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { User } from '../models/user.interface';
import { Guid } from "guid-typescript";
import { Respuesta } from '../models/respuesta.interface';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showForm: boolean = true;

  constructor(protected service: ServiceService,private router: Router) { }

  art ={
    usuario:null
  }

  ngOnInit() {

  }

  Usere:User={
    _id : '',
    usuario:'',
    nombre :'',
    apellidos :'',
    fechaIngreso :new Date,
    activo :true,
    password :''
  }
  response:Respuesta
  User:User[]

  addUser(){
    this.service.addUser(this.Usere).subscribe((result:Respuesta)=>{
      this.response=result
    })
  }

  login(user,password){
    this.service.userLogin(user,password).subscribe((result:User[])=>{
      this.User=result;
      console.log(result)
      if(result===undefined ||result==null || result.length==0){
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Error Usuario no Registrado',
          showConfirmButton: false,
          timer: 1000
        })
      }else if(result[0].activo===true){
        console.log("entre")
        this.router.navigate(['/menu']);

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login Exitoso',
          showConfirmButton: false,
          timer: 1000
        })

      }else if (result[0].activo===false){
          this.alertaExitosa('error','Error Usuario Cancelado')
        }

      // if(result[0].activo===true){
      //   console.log("entre")
      //   this.alertaExitosa('success','Login Exitoso')
      // }else if(result===undefined ||result==null || result.length==0){
      //   this.alertaExitosa('error','Error Usuario no Registrado')
      // }else if (result[0].activo===false){
      //   this.alertaExitosa('error','Error Usuario Cancelado')
      // }
      
    })
  }

  addClass() {
    this.showForm ? document.getElementById('fab').classList.add('active'): document.getElementById('fab').classList.remove('active');
    this.showForm = !this.showForm;
  }

  saveUser(){
    //console.log(this.Usere)
    this.addUser()
    document.getElementById('fab').classList.remove('active');
    //this.Usere=null;
  }

  userLogin(){
    var password=btoa(this.Usere.password)
    this.login(this.Usere.usuario,password)
  }

  validarStatus(){

  }

  alertaExitosa(icon:string,message:string){
    Swal.fire({
      position: 'center',
      icon: icon,
      title: message,
      showConfirmButton: false,
      timer: 1000
    })
  }

}
