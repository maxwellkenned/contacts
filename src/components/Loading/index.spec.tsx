import { render, screen } from '@testing-library/react'

import { Loading } from './index'

describe('Loading', () => {
  it('should render correctly', () => {
    render(<Loading />)

    expect(screen.getByRole('svg')).toBeInTheDocument()
  })
})
