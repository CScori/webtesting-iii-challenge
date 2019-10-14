import react from 'react'
import { render, fireEvent } from '@testing-library/react';

import Dashboard from './Dashboard'

test('running without errors', () => {
    expect(render(<Dashboard />).toMatchSnapshot())
 })