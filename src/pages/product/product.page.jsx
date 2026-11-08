import { useState } from "react";

const ProductPage = () => {
  const [isVisible, setIsVisible] = useState(true);

  //   const toggleVisibility = () => {

  //   };
  console.log("isVisible:", isVisible);
  return (
    <div>
      <h1>Welcome to the Product Page</h1>

      {isVisible && (
        <div
          style={{
            maxWidth: "280px",
            padding: "20px",
            borderRadius: "12px",
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ margin: "0 0 8px" }}>Product Card</h2>
          <p style={{ margin: "0 0 16px", color: "#666" }}>
            A simple product description.
          </p>
        </div>
      )}

      <button onClick={() => setIsVisible()}>Toggle the card</button>
    </div>
  );
};

export default ProductPage;
