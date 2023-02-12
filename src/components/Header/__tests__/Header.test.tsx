// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { render, screen, cleanup } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

describe("Header Component", () => {
  test("render Header component", () => {
    render(<Header />, { wrapper: BrowserRouter });
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();
  });

  test("render nav component and expect to Header contain it", () => {
    render(<Header />, { wrapper: BrowserRouter });
    const headerElement = screen.getByTestId("header");
    const navElement = screen.getByTestId("header-nav");
    expect(navElement).toBeInTheDocument();
    expect(headerElement).toContainElement(navElement);
  });

  test("render nav links", () => {
    render(<Header />, { wrapper: BrowserRouter });
    const homeLinkElement = screen.getByText(/home/i);
    const aboutLinkElement = screen.getByText(/about/i);
    const projectsLinkElement = screen.getByText(/projects/i);
    const contactLinkElement = screen.getByText(/contact/i);
    const componentsLinkElement = screen.getByText(/components/i);
    expect(homeLinkElement).toBeInTheDocument();
    expect(aboutLinkElement).toBeInTheDocument();
    expect(projectsLinkElement).toBeInTheDocument();
    expect(contactLinkElement).toBeInTheDocument();
    expect(componentsLinkElement).toBeInTheDocument();
  });
});
