import React from 'react';
import { render, fireEvent } from '@testing-library';
import Controls from './Controls'

test('it renders dashboard correctly', () => {
    expect(render(<Controls />)).toMatchSnapshot()
})

test('gate change when close gate clicked', () => {
const closeGateMock = jest.fn()
const { getByText } = render(<Controls closed={closeGateMock}/>)

fireEvent.click(getByText(/locked/i))

expect(closeGateMock).toHaveBeenCalled()
expect(closeGateMock).toHaveBeenCalledTimes(1)
})

// provide buttons to toggle the closed and locked states.
// buttons' text changes to reflect the state the door will be in if clicked
// the closed toggle button is disabled if the gate is locked
// the locked toggle button is disabled if the gate is open