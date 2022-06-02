import { render, screen } from '@testing-library/react'

import { Input } from './index'

describe('Input', () => {
  it('should render correctly', () => {
    render(<Input label="Test" name="test" />)

    expect(screen.getByRole('textbox', { name: /test/i })).toBeInTheDocument()
  })

  it('should to be show alert message', () => {
    render(<Input label="Test" name="test" error />)

    expect(screen.getByRole('alert')).toBeInTheDocument()
  })
})
