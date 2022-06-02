import { render, screen } from '@testing-library/react'

import { ButtonBack } from './index'

describe('ButtonBack', () => {
  it('should render correctly', async () => {
    render(<ButtonBack>Voltar</ButtonBack>)

    const button = screen.getByRole('button', {
      name: 'Voltar'
    })

    expect(button).toBeDefined()
  })
})
