# Configuration EmailJS pour le Portfolio

Ce guide vous explique comment configurer EmailJS pour recevoir les messages de contact directement dans votre Gmail.

## 1. Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur "Sign Up" pour créer un compte gratuit
3. Confirmez votre email

## 2. Configurer le service Gmail

1. Dans votre dashboard EmailJS, cliquez sur "Email Services"
2. Cliquez sur "Add New Service"
3. Sélectionnez "Gmail"
4. Connectez votre compte Gmail
5. Notez le **Service ID** généré (ex: `service_xxxxxxx`)

## 3. Créer un template d'email

1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Utilisez ce template :

```
Sujet: Nouveau message de {{from_name}} - {{subject}}

Bonjour {{to_name}},

Vous avez reçu un nouveau message depuis votre portfolio :

De : {{from_name}} ({{from_email}})
Sujet : {{subject}}

Message :
{{message}}

---
Répondre à : {{reply_to}}
```

4. Notez le **Template ID** généré (ex: `template_xxxxxxx`)

## 4. Obtenir votre clé publique

1. Allez dans "Account" > "General"
2. Copiez votre **Public Key** (ex: `user_xxxxxxxxxxxxxxx`)

## 5. Configurer le projet

Modifiez le fichier `src/util/emailConfig.ts` avec vos identifiants :

```typescript
export const emailConfig = {
  publicKey: 'VOTRE_PUBLIC_KEY_ICI',
  serviceId: 'VOTRE_SERVICE_ID_ICI', 
  templateId: 'VOTRE_TEMPLATE_ID_ICI',
};
```

## 6. Variables du template

Assurez-vous que votre template EmailJS utilise ces variables :
- `{{from_name}}` - Nom de l'expéditeur
- `{{from_email}}` - Email de l'expéditeur
- `{{subject}}` - Sujet du message
- `{{message}}` - Contenu du message
- `{{to_name}}` - Votre nom (destinataire)
- `{{reply_to}}` - Email pour répondre

## 7. Test

1. Redémarrez votre serveur de développement
2. Testez le formulaire de contact
3. Vérifiez votre Gmail pour le message reçu

## Limites du plan gratuit

- 200 emails/mois
- Parfait pour un portfolio personnel

## Sécurité

- Votre clé publique peut être visible côté client
- EmailJS gère la sécurité côté serveur
- Pas besoin de backend pour l'envoi d'emails

## 8. Fonctionnalités implémentées

✅ **Validation côté client** : Vérification des champs avant envoi
✅ **Gestion d'erreurs** : Messages d'erreur détaillés
✅ **Interface utilisateur** : Messages de succès/erreur avec animations
✅ **Nettoyage des données** : Suppression des espaces et formatage
✅ **Variables d'environnement** : Configuration sécurisée
✅ **Composant de test** : Vérification de la configuration en développement

## 9. Structure des fichiers

```
src/
├── util/
│   ├── emailConfig.ts      # Configuration EmailJS
│   ├── emailService.ts     # Service d'envoi d'emails
│   └── validation.ts       # Validation des formulaires
├── component/
│   └── EmailJSTest.tsx     # Composant de test (dev uniquement)
└── page/navigation/
    └── Contact.tsx         # Formulaire de contact mis à jour
```

## 10. Dépannage

**Erreur "User ID is required"** : Vérifiez votre clé publique
**Erreur "Service is not found"** : Vérifiez votre Service ID
**Erreur "Template is not found"** : Vérifiez votre Template ID
**Emails non reçus** : Vérifiez vos spams et la configuration Gmail

## 11. Utilisation du composant de test

En mode développement, un petit panneau de test apparaît en bas à droite :
- Cliquez sur "Tester" pour envoyer un email de test
- Cliquez sur "Config" pour voir la configuration actuelle
- Le panneau n'apparaît pas en production
