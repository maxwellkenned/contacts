import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { Form } from './index'

describe('Form', () => {
  it('should render correctly', () => {
    const onSubmitMock = jest.fn()
    const handleBackMock = jest.fn()

    render(<Form onSubmit={onSubmitMock} handleBack={handleBackMock} />)

    expect(screen.getByRole('textbox', { name: /nome/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toBeInTheDocument()
    expect(
      screen.getByRole('textbox', { name: /telefone/i })
    ).toBeInTheDocument()
  })

  it('should not to be submit form', async () => {
    const onSubmitMock = jest.fn()
    const handleBackMock = jest.fn()

    render(<Form onSubmit={onSubmitMock} handleBack={handleBackMock} />)

    fireEvent.submit(screen.getByRole('button', { name: /salvar/i }))

    expect(await screen.findAllByRole('alert')).toHaveLength(3)

    await waitFor(() => {
      expect(onSubmitMock).not.toHaveBeenCalled()
    })
  })

  it('should to be submit form', async () => {
    const onSubmitMock = jest.fn()
    const handleBackMock = jest.fn()

    render(<Form onSubmit={onSubmitMock} handleBack={handleBackMock} />)

    act(() => {
      fireEvent.input(screen.getByRole('textbox', { name: /nome/i }), {
        target: { value: 'test' }
      })
      fireEvent.input(screen.getByRole('textbox', { name: /e-mail/i }), {
        target: { value: 'test@test.com' }
      })
      fireEvent.input(screen.getByRole('textbox', { name: /telefone/i }), {
        target: { value: '555-555-555' }
      })
    })

    fireEvent.submit(screen.getByRole('button', { name: /salvar/i }))
    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalled()
    })
  })

  it('should to be hadleback function', async () => {
    const onSubmitMock = jest.fn()
    const handleBackMock = jest.fn()

    render(<Form onSubmit={onSubmitMock} handleBack={handleBackMock} />)

    act(() => {
      fireEvent.click(screen.getByRole('button', { name: /voltar/i }))
    })

    await waitFor(() => {
      expect(handleBackMock).toHaveBeenCalled()
    })
  })

  it('should to be render with contact info', () => {
    const onSubmitMock = jest.fn()
    const handleBackMock = jest.fn()
    const contactMock = {
      id: 1,
      name: 'test',
      email: 'test@test.com',
      phone: '555-555-555'
    }

    render(
      <Form
        onSubmit={onSubmitMock}
        handleBack={handleBackMock}
        initialData={contactMock}
      />
    )

    expect(screen.getByRole('textbox', { name: /nome/i })).toHaveValue(
      contactMock.name
    )
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toHaveValue(
      contactMock.email
    )
    expect(screen.getByRole('textbox', { name: /telefone/i })).toHaveValue(
      contactMock.phone
    )
  })
})
