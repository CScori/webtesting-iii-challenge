import react from 'react'
import { render, fireEvent } from '@testing-library/react';
import Display from './Display'

test('Display running without errors', () => {
    expect(render(<Display />).toMatchSnapshot())
 })