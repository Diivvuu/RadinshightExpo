import React from "react";
import { View, Text, Modal, Button, StyleSheet } from "react-native";
import { useError } from "./ErrorContext";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    this.props.onError(error); // Notify ErrorContext about the error
  }

  resetError = () => {
    this.setState({ hasError: false });
    this.props.onReset();
  };

  render() {
    const { error } = this.props;
    if (this.state.hasError || error) {
      return (
        <Modal
          visible={true}
          transparent={true}
          animationType="slide"
          onRequestClose={this.resetError}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.errorText}>Something went wrong:</Text>
              <Text style={styles.errorDetails}>
                {error?.toString() || "An unknown error occurred"}
              </Text>
              <Button title="Close" onPress={this.resetError} />
            </View>
          </View>
        </Modal>
      );
    }

    return this.props.children;
  }
}

// Wrapper to connect ErrorBoundary with ErrorContext
const ErrorBoundaryWithContext = ({ children }) => {
  const { error, handleError, resetError } = useError();

  return (
    <ErrorBoundary error={error} onError={handleError} onReset={resetError}>
      {children}
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  errorDetails: {
    marginBottom: 20,
    textAlign: "center",
  },
});

export default ErrorBoundaryWithContext;
