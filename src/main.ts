import { ReactComponent } from './ReactComponent';

const plugin = {
  name: 'spinnaker-sample-plugin',
  component: ReactComponent,
  init: function(args: any) {
    console.log('init');
    console.log(args);
  }
};

export { plugin };

