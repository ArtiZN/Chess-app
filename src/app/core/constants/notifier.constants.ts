import { NotifierConfig } from 'angular-notifier/src/models/notifier-config.model';

export const notifierConfig: NotifierConfig = {
  position: {
    horizontal: {
      position: 'right',
      distance: 40
    },
    vertical: {
      position: 'top',
      distance: 80,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};
