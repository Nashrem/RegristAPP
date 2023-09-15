import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {
  email: string = '';

  constructor(private toastController: ToastController) {}

  async resetPassword() {
    const toast = await this.toastController.create({
      message: 'Se ha enviado un correo electrónico de recuperación de contraseña.',
      duration: 5000,
    });
    toast.present();
  }
}

