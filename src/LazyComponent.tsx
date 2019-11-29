import * as React from 'react';
import { FormField, HelpField, TextInput } from '@spinnaker/core';

interface ILazyComponentProps {
  name: string;
}

export function LazyComponent(props: ILazyComponentProps) {
  const [value, setValue] = React.useState('form field');

  return (
      <>
        <h1>Hello {props.name} - from Lazy Loaded Component</h1>
        <FormField
            label="form field"
            help={<HelpField content="This is the help text"/>}
            value={value}
            onChange={e => setValue(e.target.value)}
            input={props => <TextInput {...props} />}/>
      </>
  )
}
