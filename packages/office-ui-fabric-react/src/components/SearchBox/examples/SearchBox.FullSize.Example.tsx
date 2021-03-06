import * as React from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

export class SearchBoxFullSizeExample extends React.Component<any, any> {
  public render() {
    return (
      <SearchBox
        // tslint:disable:jsx-no-lambda
        onFocus={ () => console.log('onFocus called') }
        onBlur={ () => console.log('onBlur called') }
        onChange={ () => console.log('onChange called') }
      />
    );
  }

}
