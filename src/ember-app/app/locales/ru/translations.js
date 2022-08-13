import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'I s s33',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s33',
          title: 'I s s33'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
