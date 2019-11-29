import * as React from 'react';
import { FormikFormField, HelpField, NumberInput, SpinFormik, TextInput, Validators } from '@spinnaker/core';

interface ILazyComponentProps {
  name: string;
}

function LazyComponentForm() {
  return (
    <>
      <FormikFormField
        name="email"
        label="Email"
        help={<HelpField content="enter an email address" />}
        validate={Validators.emailValue()}
        input={props => <TextInput placeholder="enter an email address" {...props} />}
      />

      <FormikFormField
        name="age"
        label="Your age"
        help={<HelpField content="A number between 10 and 100" />}
        input={props => <NumberInput placeholder="enter a number between 10 and 100" {...props} min={10} max={100} />}
      />
    </>
  );
}

export function LazyComponent(props: ILazyComponentProps) {
  return (
    <>
      <h1>Hello {props.name} - from Lazy Loaded Component</h1>
      <p>These are SpinFormik, FormikFormField and Inputs from @spinnaker/core</p>
      <SpinFormik
        initialValues={{ email: null, number: null }}
        onSubmit={() => undefined}
        render={props => <LazyComponentForm />}
      ></SpinFormik>
    </>
  );
}
