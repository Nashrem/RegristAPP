import { Component, OnInit, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { Router ,NavigationExtras} from '@angular/router';
import { AnimationController, IonCard } from '@ionic/angular';
//import { AdentificacionService } from '../adentificacion.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;
  passwordVisible: boolean = false;
  password: string = '';

  togglePasswordVisibility(){
    this.passwordVisible = !
    this.passwordVisible;
  }
  private animation!: Animation;

  constructor(private animationCtrl: AnimationController,/*private auth: AdentificacionService*/private router: Router) {}
  /*public mensaje = ""
  user = {
    usuario: "",
    password: ""

  }*/
  //enviarInformacion() {
   // this.auth.login(this.user.usuario, this.user.password)
   // if (this.auth.autenticado) {
   //   let navigationExtras: NavigationExtras = {
   //     state: { user: this.user }
    //  }
    //  this.router.navigate(['/signup'], navigationExtras);
   // } else {
   //   this.mensaje = "Debe ingresar sus credenciales";
  //  }
 // }
  //--iniciarSesion() {
    //const isAuthenticated = this.auth.login(
    //  this.correoElectronico = this.correoElectronico,
   //   this.contrasena = this.contrasena
   // );
   // if (isAuthenticated) {
      // Redirigir al usuario después de una autenticación exitosa
   //   this.router.navigate(['/signup'])
   // } else {
   //   this.mensaje = "Debe ingresar sus credenciales";
   // }
  //}

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(5)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
  }

  play() {
    this.animation.play();
  }
  

  ngOnInit() {
  }

}
