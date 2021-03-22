import { render, screen } from '@testing-library/react'

import SectionAbout from '.'

describe('<SectionAbout />', () => {
  it('should render the heading', () => {
    const { container } = render(<SectionAbout />)

    expect(screen.getByRole('heading', { name: /SectionAbout/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
