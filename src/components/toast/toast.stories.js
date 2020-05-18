import React from 'react';
import { action } from '@storybook/addon-actions';
import Toast from './toast';

export default {
  title: Toast.name
};

export const Default = () => (
  <Toast toasts={[{ text: 'test 1', id: '1' }, { text: 'test 2', id: '2' }]} onRemoveToast={action('onRemoveToast')} />
);
