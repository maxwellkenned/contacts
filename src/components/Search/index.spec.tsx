import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { Search } from './index'

describe('Search', () => {
  it('should render correctly', () => {
    const onSearchMock = jest.fn()
    render(<Search onSearch={onSearchMock} />)

    expect(screen.getByRole('searchbox')).toBeInTheDocument()
  })

  it('should call onSearch function', async () => {
    const onSearchMock = jest.fn()
    render(<Search onSearch={onSearchMock} />)

    act(() => {
      fireEvent.change(screen.getByRole('searchbox'), {
        target: { value: 'test' }
      })
    })

    await waitFor(() => {
      expect(onSearchMock).toHaveBeenCalled()
    })
  })
})
