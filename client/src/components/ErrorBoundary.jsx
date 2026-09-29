import { Component } from "react";
import Button from "./Button";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="grid min-h-screen place-items-center bg-ink px-6 text-center">
          <div className="max-w-md">
            <p className="text-sm tracking-[0.2em] text-muted">SOMETHING BROKE</p>
            <h1 className="mt-4 text-3xl font-semibold">This page hit an unexpected error.</h1>
            <Button className="mt-8" onClick={() => window.location.assign("/")}>
              Back to Home
            </Button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
