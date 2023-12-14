import { render, screen } from '@testing-library/react';
import App from './App';
import Media from './Mediacode.css';
import Heder from './styles/Header.css';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
