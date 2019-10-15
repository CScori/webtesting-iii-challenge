import React from 'react';
import { render, fireEvent } from '@testing-library';
import Controls from './Controls'

test('it renders dashboard correctly', () => {
    expect(render(<Controls />)).toMatchSnapshot()
})

test('gate change when close gate clicked', () => {
const closeGateMock = jest.fn()
const { getByText } = render(<Controls closed={closeGateMock}/>)

fireEvent.click(getByText(/closed/i))

expect(closeGateMock).toHaveBeenCalled()
expect(closeGateMock).toHaveBeenCalledTimes(1)
})


test('lock change when lock gate clicked', () => {
    const lockGateMock = jest.fn()
    const { getByText } = render(
        <Controls locked={lockGateMock}/>
    )
fireEvent.click(getByText(/locked/i))
expect(lockGateMock).toHaveBeenCalled()
expect(lockGateMock).toHaveBeenCalledTimes(1)
fireEvent.click()
})
// the closed toggle button is disabled if the gate is locked
// the locked toggle button is disabled if the gate is open