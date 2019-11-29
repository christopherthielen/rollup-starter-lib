import * as React from 'react';
import './ReactComponent.less';

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const LazyComponent = React.lazy(() => wait(2000).then(() => import('./LazyComponent').then(mod => ({ default: mod.LazyComponent }))));

export function ReactComponent() {
  return (
      <div className="PluginReactComponent">
        <h1>Hello - from plugin!</h1>
        <React.Suspense fallback={<h3>Lazy Loading code, please wait 2 seconds...</h3>}>
          <LazyComponent name="world"/>
        </React.Suspense>
      </div>
  )
}
