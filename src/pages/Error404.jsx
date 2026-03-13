import React, { useState } from 'react'


const Error404 = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#f9fafb",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "20px",
    }}>
      <h2 style={{ fontSize: "24px", color: "#333", marginTop: "16px" }}>Sahifa topilmadi</h2>
      <p style={{ color: "#888", fontSize: "15px", marginTop: "8px", maxWidth: "360px" }}>
        Siz qidirayotgan sahifa mavjud emas yoki o'chirib tashlangan.
      </p>
      <div style={{ display: "flex", gap: "12px", marginTop: "32px" }}>
        <button
          onClick={() => window.location.href = "/"}
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
          style={{
            padding: "12px 28px",
            background: hover1 ? "#333" : "#111",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "14px",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
        >
          Bosh sahifa
        </button>
        <button
          onClick={() => window.history.back()}
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
          style={{
            padding: "12px 28px",
            background: "#fff",
            color: "#111",
            border: "1px solid #ddd",
            borderRadius: "8px",
            fontSize: "14px",
            cursor: "pointer",
            background: hover2 ? "#f3f4f6" : "#fff",
            transition: "background 0.2s",
          }}
        >
          Orqaga
        </button>
      </div>
    </div>
  );
}

export default Error404