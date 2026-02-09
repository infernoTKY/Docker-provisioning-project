import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const originalEnv = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = { ...originalEnv };
});

afterAll(() => {
  process.env = originalEnv;
});

test('renders Development Server text by default', () => {
  process.env.REACT_APP_NAME = 'development';
  render(<App />);
  expect(screen.getByText(/Development Server/i)).toBeInTheDocument();
  const banner = screen.queryByText(/Production Environment/i);
  expect(banner).not.toBeInTheDocument();
});

test('renders Production Banner when env is production', () => {
  process.env.REACT_APP_NAME = 'production';
  render(<App />);
  expect(screen.getByText(/Production Environment/i)).toBeInTheDocument();
  expect(screen.getByText(/This is the Production Server/i)).toBeInTheDocument();
});

// The new test you want to add
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});