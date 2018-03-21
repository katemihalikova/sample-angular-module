# Sample Angular Module

## Install

```sh 
npm install --save @katemihalikova/sample
```

## Configure

Add `SampleModule.forRoot()` to your root module:

```javascript
import { SampleModule } from '@katemihalikova/sample';

@NgModule({
  ...
  imports: [
    ...
    SampleModule.forRoot(),
  ],
  ...
})
export class AppModule {}
```

Optionally also add `SampleModule` to your lazy-loaded modules:

```javascript
import { SampleModule } from '@katemihalikova/sample';

@NgModule({
  ...
  imports: [
    ...
    SampleModule,
  ],
  ...
})
export class LazyLoadedModule {}
```

## Use

### Get sample string

```javascript
import { SampleService } from '@katemihalikova/sample';
```

```javascript
constructor(
  ...
  private sampleService: SampleService,
) {}

sampleString = this.sampleService.getSample();
```

### Component with sample string getter

```html
<km-sample></km-sample>
```
