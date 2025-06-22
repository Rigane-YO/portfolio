// Configuration EmailJS
// Remplacez ces valeurs par vos propres identifiants EmailJS

export const emailConfig = {
  // Configuration depuis les variables d'environnement
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'VOTRE_PUBLIC_KEY',
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'VOTRE_SERVICE_ID',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'VOTRE_TEMPLATE_ID',
};

// Interface pour les données du formulaire
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Interface pour les paramètres du template EmailJS
export interface EmailTemplateParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_name: string; // Votre nom
  reply_to: string;
}
