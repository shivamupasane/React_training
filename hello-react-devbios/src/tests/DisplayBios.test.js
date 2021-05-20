import { render, screen } from '@testing-library/react';
import DisplayBios from '../components/DisplayBios';
import Developer from '../models/Developer';
import AppContext from '../contexts';
import {BrowserRouter as Router} from 'react-router-dom';
const fakeDevs = {
    developers: [
        new Developer(1, "Shivam", "Upasane", "javascript", 2017),
        new Developer(1, "a", "b", "java", 2021),
    ]
}
test('Renders Developer Bios', () => {
    //provide context to displayBios
  render(<AppContext.Provider value={fakeDevs}><Router><DisplayBios /></Router></AppContext.Provider>);
  const bio1 = screen.getByText(/Shivam/);
  expect(bio1).toBeInTheDocument();
});
