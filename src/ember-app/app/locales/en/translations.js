import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISISS33FormLForm from './forms/i-i-s-i-s-s33-form-l';
import IISISS33InvestmentLForm from './forms/i-i-s-i-s-s33-investment-l';
import IISISS33SizeLForm from './forms/i-i-s-i-s-s33-size-l';
import IISISS33SupportLForm from './forms/i-i-s-i-s-s33-support-l';
import IISISS33FormEForm from './forms/i-i-s-i-s-s33-form-e';
import IISISS33InvestmentEForm from './forms/i-i-s-i-s-s33-investment-e';
import IISISS33SizeEForm from './forms/i-i-s-i-s-s33-size-e';
import IISISS33SupportEForm from './forms/i-i-s-i-s-s33-support-e';
import IISISS33ListInvModel from './models/i-i-s-i-s-s33-list-inv';
import IISISS33ListSizeModel from './models/i-i-s-i-s-s33-list-size';
import IISISS33SupportModel from './models/i-i-s-i-s-s33-support';
import ИнвестицииModel from './models/инвестиции';
import РазмерModel from './models/размер';
import ФормаModel from './models/форма';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-s-s33-list-inv': IISISS33ListInvModel,
    'i-i-s-i-s-s33-list-size': IISISS33ListSizeModel,
    'i-i-s-i-s-s33-support': IISISS33SupportModel,
    'инвестиции': ИнвестицииModel,
    'размер': РазмерModel,
    'форма': ФормаModel
  },

  'application-name': 'I s s33',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'I s s33',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s33',
          title: 'I s s33'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'i-s-s33': {
          caption: 'ISS33',
          title: 'ISS33',
          'i-i-s-i-s-s33-size-l': {
            caption: 'Size',
            title: ''
          },
          'i-i-s-i-s-s33-form-l': {
            caption: 'Форма',
            title: ''
          },
          'i-i-s-i-s-s33-support-l': {
            caption: 'Support',
            title: ''
          },
          'i-i-s-i-s-s33-investment-l': {
            caption: 'Investment',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-i-s-s33-form-l': IISISS33FormLForm,
    'i-i-s-i-s-s33-investment-l': IISISS33InvestmentLForm,
    'i-i-s-i-s-s33-size-l': IISISS33SizeLForm,
    'i-i-s-i-s-s33-support-l': IISISS33SupportLForm,
    'i-i-s-i-s-s33-form-e': IISISS33FormEForm,
    'i-i-s-i-s-s33-investment-e': IISISS33InvestmentEForm,
    'i-i-s-i-s-s33-size-e': IISISS33SizeEForm,
    'i-i-s-i-s-s33-support-e': IISISS33SupportEForm
  },

});

export default translations;
