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
    // Aquí debes implementar la lógica de recuperación de contraseña.
    // Puedes enviar un correo electrónico al usuario o generar un token y proporcionar un enlace para restablecer la contraseña.

    // Muestra un mensaje de confirmación al usuario
    const toast = await this.toastController.create({
      message: 'Se ha enviado un correo electrónico de recuperación de contraseña.',
      duration: 5000,
    });
    toast.present();
  }
}

