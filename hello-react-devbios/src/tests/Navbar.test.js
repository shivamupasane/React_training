import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar';
import {BrowserRouter as Router} from 'react-router-dom';
test('renders Developer bio link', () => {
  render(<Router><NavBar /></Router>);
  const linkElement = screen.getByText(/Developer Bios/);
  expect(linkElement).toBeInTheDocument();
});
test('Developer bio link is appropriate', () => {
    render(<Router><NavBar /></Router>);
    const linkElement = screen.getByText(/Developer Bios/);
    expect(linkElement.getAttribute("href")).toBe("/bios");
  });
//TO DO FOR EACH LINK
