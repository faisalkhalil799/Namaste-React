import Contact from "../components/Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Page Test Cases", () => {
  test("Should render main heading on page load", () => {
    render(<Contact />);
    const heading = screen.getByText("Contact Us");
    expect(heading).toBeInTheDocument();
  });

  test("Should render subheading text", () => {
    render(<Contact />);
    const subHeading = screen.getByText(/we'd love to hear from you/i);
    expect(subHeading).toBeInTheDocument();
  });

  test("Should render Get in touch section", () => {
    render(<Contact />);
    const sectionHeading = screen.getByText("Get in touch");
    expect(sectionHeading).toBeInTheDocument();
  });

  test("Should render contact details", () => {
    render(<Contact />);
    expect(screen.getByText(/contact@company.com/i)).toBeInTheDocument();

    expect(screen.getByText(/\+1 \(234\) 567-890/i)).toBeInTheDocument();
  });

  test("Should render Send a Message button", () => {
    render(<Contact />);
    const button = screen.getByRole("button", {
      name: /send a message/i,
    });
    expect(button).toBeInTheDocument();
  });
});
