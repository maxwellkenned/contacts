import { render, screen } from '@testing-library/react'

import { ButtonEdit } from './index'

describe('ButtonEdit', () => {
  it('should render correctly', async () => {
    render(<ButtonEdit>Editar</ButtonEdit>)

    const button = screen.getByRole('button', {
      name: 'Editar'
    })

    expect(button).toBeDefined()
  })
})
