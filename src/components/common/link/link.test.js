import React from 'react';
import { screen } from '@testing-library/react';
import Link from './link';
import { render } from '../../../infra/tests/testUtils';

describe('<FormContact />', () => {
  test('renderiza componente', () => {
    render(
      <Link href="/projects/quiz-challenge">
        test
      </Link>,
    );
    screen.debug();
    const link = screen.getByRole('link', {
      name: /test/i,
    });
    expect(link).toMatchSnapshot();
  });
});
