import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Display from './Display'

test('it renders dashboard correctly', () => {
    expect(render(<Display />)).toMatchSnapshot()
})