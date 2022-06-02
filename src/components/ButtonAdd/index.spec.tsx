import { render, screen } from '@testing-library/react'

import { ButtonAdd } from './index'

describe('ButtonAdd', () => {
  it('should render correctly', async () => {
    render(<ButtonAdd>Adicionar novo contato</ButtonAdd>)

    const button = screen.getByRole('button', {
      name: 'Adicionar novo contato'
    })

    expect(button).toBeDefined()
  })
})
