import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reg = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Iltimos barcha maydonlarni to'ldiring!");
      return;
    }

    setLoading(true);

    try {
      const checkRes = await axios.get(
        `http://localhost:3004/peoples?email=${email}`
      );

      if (checkRes.data && checkRes.data.length > 0) {
        alert("Siz allaqachon ro'yxatdan o'tgansiz! Iltimos login qiling.");
        setLoading(false);
        return;
      }

      await axios.post("http://localhost:3004/peoples", {
        name,
        email,
        password,
      });

      alert("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Xatolik yuz berdi. Qaytadan urinib ko'ring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "20px",
          padding: "40px",
          width: "100%",
          maxWidth: "420px",
          boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
        }}
      >
        <h2
          style={{
            color: "#fff",
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "8px",
            textAlign: "center",
          }}
        >
          Ro'yxatdan o'tish
        </h2>
        <p style={{ color: "rgba(255,255,255,0.5)", textAlign: "center", marginBottom: "32px", fontSize: "14px" }}>
          Hisobingizni yarating
        </p>

        <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", marginBottom: "6px", display: "block" }}>
              To'liq ism
            </label>
            <input
              type="text"
              placeholder="Ismingizni kiriting"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                fontSize: "15px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div>
            <label style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", marginBottom: "6px", display: "block" }}>
              Email
            </label>
            <input
              type="email"
              placeholder="email@misol.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                fontSize: "15px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div>
            <label style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", marginBottom: "6px", display: "block" }}>
              Parol
            </label>
            <input
              type="password"
              placeholder="Parolingizni kiriting"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                fontSize: "15px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "none",
              background: loading
                ? "rgba(99,102,241,0.5)"
                : "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600",
              cursor: loading ? "not-allowed" : "pointer",
              marginTop: "8px",
              transition: "opacity 0.2s",
            }}
          >
            {loading ? "Yuklanmoqda..." : "Ro'yxatdan o'tish"}
          </button>
        </form>

        <p style={{ color: "rgba(255,255,255,0.5)", textAlign: "center", marginTop: "24px", fontSize: "14px" }}>
          Hisobingiz bormi?{" "}
          <span
            onClick={() => navigate("/login")}
            style={{ color: "#818cf8", cursor: "pointer", fontWeight: "600" }}
          >
            Kirish
          </span>
        </p>
      </div>
    </div>
  );
};

export default Reg;