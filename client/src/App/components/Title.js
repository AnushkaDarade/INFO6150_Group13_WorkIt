import React from 'react';
import Alert from 'react-bootstrap/Alert';

function Title(variant) {
  return (
    <>
      {[
        'primary',
        'secondary',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
}

export default Title;