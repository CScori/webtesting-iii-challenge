import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard'


test('it renders dashboard correctly', () => {
    expect(render(<Dashboard />)).toMatchSnapshot()
})

// test('dashboard is default open closed', () => {
//     const { getByText } = render(<Dashboard />)
//     getByText(/open/i)
//     })

