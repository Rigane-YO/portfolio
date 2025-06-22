import { ContactFormData } from './emailConfig';

export interface ValidationResult {
  isValid: boolean;
  errors: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
}

/**
 * Valide les données du formulaire de contact
 */
export const validateContactForm = (data: ContactFormData): ValidationResult => {
  const errors: ValidationResult['errors'] = {};

  // Validation du nom
  if (!data.name.trim()) {
    errors.name = 'Le nom est obligatoire';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Le nom doit contenir au moins 2 caractères';
  } else if (data.name.trim().length > 50) {
    errors.name = 'Le nom ne peut pas dépasser 50 caractères';
  }

  // Validation de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.email = 'L\'email est obligatoire';
  } else if (!emailRegex.test(data.email.trim())) {
    errors.email = 'Veuillez entrer une adresse email valide';
  }

  // Validation du sujet
  if (!data.subject.trim()) {
    errors.subject = 'Le sujet est obligatoire';
  } else if (data.subject.trim().length < 3) {
    errors.subject = 'Le sujet doit contenir au moins 3 caractères';
  } else if (data.subject.trim().length > 100) {
    errors.subject = 'Le sujet ne peut pas dépasser 100 caractères';
  }

  // Validation du message
  if (!data.message.trim()) {
    errors.message = 'Le message est obligatoire';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Le message doit contenir au moins 10 caractères';
  } else if (data.message.trim().length > 1000) {
    errors.message = 'Le message ne peut pas dépasser 1000 caractères';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Nettoie et formate les données du formulaire
 */
export const sanitizeFormData = (data: ContactFormData): ContactFormData => {
  return {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    subject: data.subject.trim(),
    message: data.message.trim()
  };
};
