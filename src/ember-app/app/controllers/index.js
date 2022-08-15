import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.i-s-s33.caption'),
          title: i18n.t('forms.application.sitemap.i-s-s33.title'),
          children: [{
            link: 'i-i-s-i-s-s33-size-l',
            caption: i18n.t('forms.application.sitemap.i-s-s33.i-i-s-i-s-s33-size-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s33.i-i-s-i-s-s33-size-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-i-s-s33-form-l',
            caption: i18n.t('forms.application.sitemap.i-s-s33.i-i-s-i-s-s33-form-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s33.i-i-s-i-s-s33-form-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-i-s-s33-support-l',
            caption: i18n.t('forms.application.sitemap.i-s-s33.i-i-s-i-s-s33-support-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s33.i-i-s-i-s-s33-support-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-i-s-s33-investment-l',
            caption: i18n.t('forms.application.sitemap.i-s-s33.i-i-s-i-s-s33-investment-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s33.i-i-s-i-s-s33-investment-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})