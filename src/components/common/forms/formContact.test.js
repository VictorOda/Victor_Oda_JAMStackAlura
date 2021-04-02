import React from 'react';
import { screen } from '@testing-library/react';
import FormContact from './formContact';
import { render } from '../../../infra/tests/testUtils';

jest.mock('font-awesome/css/font-awesome.min.css', () => ({
  FontAwesomeIcon: '',
}));

describe('<FormContact />', () => {
  test('renderiza componente', () => {
    const onClose = jest.fn();
    render(
      <FormContact
        onClose={onClose}
        isOpen
      />,
    );
    screen.debug();
    const textInput = screen.getByPlaceholderText(/Seu nome aqui/i);
    expect(textInput).toMatchSnapshot();
  });
});
