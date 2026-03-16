import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // You could log the error to an external service here
    // console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-2xl bg-white dark:bg-gray-900 border border-red-300 dark:border-red-900 p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">
              Something went wrong
            </h2>
            <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
              {String(this.state.error)}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
