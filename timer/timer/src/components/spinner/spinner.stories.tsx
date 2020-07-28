import React, { FC } from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { Spinner } from './Spinner';

export const SpinnerTestPage: FC = () => {
  return (
      <div>
          <Spinner/>
      </div>
  )
};


export default {
  title: 'Spinner',
  component: SpinnerTestPage,
};
