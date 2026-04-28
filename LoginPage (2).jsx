import { useState } from "react";

export default function LoginPage({ onLogin, onNavigate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (onLogin) onLogin(email, password);
    }, 1200);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={styles.bg}>
      {/* Animated background blobs */}
      <div style={styles.blob1} />
      <div style={styles.blob2} />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-7 col-lg-5">
            <div style={styles.card} className="p-4 p-md-5">

              {/* Logo */}
              <div className="text-center mb-4">
                <div style={styles.shieldWrapper}>
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6L12 2z" fill="#3b82f6" opacity="0.2"/>
                    <path d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6L12 2z" stroke="#3b82f6" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M9 12l2 2 4-4" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 style={styles.brand}>VaultSafe</h2>
                <p style={styles.tagline}>Digital Asset Protection</p>
              </div>

              <h4 style={styles.heading} className="mb-1">Welcome back</h4>
              <p style={styles.subtext} className="mb-4">Sign in to access your protected files</p>

              {error && (
                <div className="alert d-flex align-items-center gap-2 py-2 px-3 mb-3" style={styles.errorBox} role="alert">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#f87171" strokeWidth="1.5"/><path d="M12 8v4m0 4h.01" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  <span style={{ color: "#fca5a5", fontSize: "14px" }}>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Email */}
                <div className="mb-3">
                  <label style={styles.label} className="form-label">Email address</label>
                  <div style={styles.inputWrapper}>
                    <svg style={styles.inputIcon} width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#64748b" strokeWidth="1.5"/><path d="M22 6l-10 7L2 6" stroke="#64748b" strokeWidth="1.5"/></svg>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={styles.input}
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label style={styles.label} className="form-label">Password</label>
                  <div style={styles.inputWrapper}>
                    <svg style={styles.inputIcon} width="16" height="16" fill="none" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" stroke="#64748b" strokeWidth="1.5"/><path d="M7 11V7a5 5 0 0110 0v4" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ ...styles.input, paddingRight: "44px" }}
                    />
                    <button type="button" style={styles.eyeBtn} onClick={() => setShowPassword(!showPassword)}>
                      {showPassword
                        ? <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/><line x1="1" y1="1" x2="23" y2="23" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/></svg>
                        : <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#94a3b8" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke="#94a3b8" strokeWidth="1.5"/></svg>
                      }
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn w-100 d-flex align-items-center justify-content-center gap-2"
                  style={styles.submitBtn}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm" style={{ width: "16px", height: "16px", borderWidth: "2px" }} />
                      Signing in...
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      Sign In
                    </>
                  )}
                </button>
              </form>

              <div className="text-center mt-4">
                <p style={styles.switchText}>
                  Don't have an account?{" "}
                  <button
                    style={styles.linkBtn}
                    onClick={() => onNavigate && onNavigate("register")}
                  >
                    Create one
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  bg: {
    background: "#060d1a",
    position: "relative",
    overflow: "hidden",
  },
  blob1: {
    position: "fixed", top: "-120px", left: "-120px",
    width: "400px", height: "400px",
    background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
    borderRadius: "50%", pointerEvents: "none",
  },
  blob2: {
    position: "fixed", bottom: "-100px", right: "-100px",
    width: "360px", height: "360px",
    background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
    borderRadius: "50%", pointerEvents: "none",
  },
  card: {
    background: "rgba(15, 23, 42, 0.85)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: "20px",
    boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
    position: "relative",
    zIndex: 1,
  },
  shieldWrapper: {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    width: "68px", height: "68px",
    background: "rgba(59,130,246,0.1)",
    borderRadius: "18px",
    border: "1px solid rgba(59,130,246,0.2)",
    marginBottom: "12px",
  },
  brand: {
    color: "#f1f5f9", fontSize: "26px", fontWeight: "700",
    letterSpacing: "-0.5px", margin: 0, fontFamily: "'Segoe UI', sans-serif",
  },
  tagline: { color: "#64748b", fontSize: "13px", marginTop: "2px" },
  heading: { color: "#f1f5f9", fontWeight: "600", fontSize: "20px", fontFamily: "'Segoe UI', sans-serif" },
  subtext: { color: "#64748b", fontSize: "14px" },
  label: { color: "#94a3b8", fontSize: "13px", fontWeight: "500", marginBottom: "6px" },
  inputWrapper: { position: "relative" },
  inputIcon: { position: "absolute", left: "13px", top: "50%", transform: "translateY(-50%)", zIndex: 2, pointerEvents: "none" },
  input: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "10px",
    color: "#f1f5f9",
    fontSize: "15px",
    padding: "10px 14px 10px 40px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  },
  eyeBtn: {
    position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)",
    background: "none", border: "none", cursor: "pointer", padding: "2px",
  },
  submitBtn: {
    background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
    border: "none", borderRadius: "10px", padding: "12px",
    fontSize: "15px", fontWeight: "600", color: "white",
    transition: "opacity 0.2s, transform 0.1s",
    letterSpacing: "0.2px",
  },
  errorBox: {
    background: "rgba(239,68,68,0.1)",
    border: "1px solid rgba(239,68,68,0.3)",
    borderRadius: "8px",
  },
  switchText: { color: "#64748b", fontSize: "14px" },
  linkBtn: {
    background: "none", border: "none", color: "#3b82f6",
    fontWeight: "600", cursor: "pointer", padding: 0, fontSize: "14px",
  },
};
