import React from "react";
import { Container } from 'react-bootstrap';
import { Toaster } from "react-hot-toast";
import { RouterProvider } from 'react-router-dom'
import router from "./Routes/router";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <RouterProvider router={router} />
        <Toaster></Toaster>
      </div>
    </Container>
  );
}

export default App;
