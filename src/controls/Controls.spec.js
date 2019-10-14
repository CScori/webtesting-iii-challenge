import react from 'react'
import { render, fireEvent } from '@testing-library/react';

//import comp 
import Controls from './Controls'
//snapsheet test for chec
test('running without errors', () => {
   expect(render(<Controls />).toMatchSnapshot())
})