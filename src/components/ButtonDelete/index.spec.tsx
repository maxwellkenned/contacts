import { render, screen } from '@testing-library/react'

import { ButtonDelete } from './index'

describe('ButtonDelete', () => {
  it('should render correctly', async () => {
    render(<ButtonDelete>Excluir</ButtonDelete>)

    const button = screen.getByRole('button', {
      name: 'Excluir'
    })

    expect(button).toBeDefined()
  })
})
