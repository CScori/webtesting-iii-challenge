import React from 'react';
import { render, fireEvent } from '@testing-library';
import Controls from './Controls'

test('it renders dashboard correctly', () => {
    expect(render(<Controls />)).toMatchSnapshot()
})