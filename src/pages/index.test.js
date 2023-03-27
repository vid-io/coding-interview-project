import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from './'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)

    expect(screen.getByText(/List of keywords/)).toBeInTheDocument()
  })
})
