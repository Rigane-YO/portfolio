import emailjs from '@emailjs/browser';
import { emailConfig, ContactFormData, EmailTemplateParams } from './emailConfig';
import { validateContactForm, sanitizeFormData } from './validation';

// Initialiser EmailJS avec votre clé publique
emailjs.init(emailConfig.publicKey);

/**
 * Service pour envoyer des emails via EmailJS
 */
export class EmailService {
  /**
   * Envoie un email de contact
   * @param formData - Données du formulaire de contact
   * @returns Promise<boolean> - true si l'envoi a réussi, false sinon
   */
  static async sendContactEmail(formData: ContactFormData): Promise<{
    success: boolean;
    message: string;
  }> {
    try {
      // Nettoyage des données
      const cleanData = sanitizeFormData(formData);

      // Validation des données
      const validation = validateContactForm(cleanData);
      if (!validation.isValid) {
        const firstError = Object.values(validation.errors)[0];
        return {
          success: false,
          message: firstError || 'Veuillez corriger les erreurs du formulaire.'
        };
      }

      // Préparation des paramètres pour le template EmailJS
      const templateParams: EmailTemplateParams = {
        from_name: cleanData.name,
        from_email: cleanData.email,
        subject: cleanData.subject || 'Nouveau message depuis le portfolio',
        message: cleanData.message,
        to_name: 'Rigane', // Votre nom
        reply_to: cleanData.email,
      };

      // Envoi de l'email via EmailJS
      const response = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams
      );

      console.log('Email envoyé avec succès:', response);
      
      return {
        success: true,
        message: 'Message envoyé avec succès ! Je vous répondrai bientôt.'
      };

    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      
      // Gestion des erreurs spécifiques
      if (error instanceof Error) {
        if (error.message.includes('network')) {
          return {
            success: false,
            message: 'Erreur de connexion. Vérifiez votre connexion internet.'
          };
        }
        if (error.message.includes('rate limit')) {
          return {
            success: false,
            message: 'Trop de tentatives. Veuillez réessayer dans quelques minutes.'
          };
        }
      }

      return {
        success: false,
        message: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.'
      };
    }
  }

  /**
   * Teste la configuration EmailJS
   * @returns Promise<boolean> - true si la configuration est valide
   */
  static async testConfiguration(): Promise<boolean> {
    try {
      // Test avec des données fictives
      const testData: ContactFormData = {
        name: 'Test',
        email: 'test@example.com',
        subject: 'Test de configuration',
        message: 'Ceci est un test de configuration EmailJS.'
      };

      const result = await this.sendContactEmail(testData);
      return result.success;
    } catch (error) {
      console.error('Erreur lors du test de configuration:', error);
      return false;
    }
  }
}
