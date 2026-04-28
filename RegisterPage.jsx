import { useState } from "react";

export default function RegisterPage({ onRegister, onNavigate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (onRegister) onRegister({ name, email, password });
    }, 1200);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={styles.bg}>
      <div style={styles.blob1} />
      <div style={styles.blob2} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-7 col-lg-5">
            <div style={styles.card} className="p-4 p-md-5">
              <div className="text-center mb-4">
                <h2 style={styles.brand}>Create Account</h2>
                <p style={styles.subtext}>Join VaultSafe today</p>
              </div>

              {error && (
                <div className="alert d-flex align-items-center gap-2 py-2 px-3 mb-3" style={styles.errorBox} role="alert">
                  <span style={{ color: "#fca5a5", fontSize: "14px" }}>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label style={styles.label} className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                  />
                </div>
                <div className="mb-3">
                  <label style={styles.label} className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                  />
                </div>
                <div className="mb-4">
                  <label style={styles.label} className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                  />
                </div>
                <button
                  type="submit"
                  className="btn w-100"
                  style={styles.submitBtn}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" style={{ width: "16px", height: "16px", borderWidth: "2px" }} />
                      Creating...
                    </>
                  ) : "Sign Up"}
                </button>
              </form>
              <div className="text-center mt-4">
                <p style={styles.switchText}>
                  Already have an account?{" "}
                  <button
                    style={styles.linkBtn}
                    onClick={() => onNavigate && onNavigate("login")}
                  >
                    Sign in
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
  bg: { background: "#060d1a", position: "relative", overflow: "hidden" },
  blob1: { position: "fixed", top: "-120px", left: "-120px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" },
  blob2: { position: "fixed", bottom: "-100px", right: "-100px", width: "360px", height: "360px", background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" },
  card: { background: "rgba(15, 23, 42, 0.85)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", boxShadow: "0 32px 80px rgba(0,0,0,0.5)", position: "relative", zIndex: 1 },
  brand: { color: "#f1f5f9", fontSize: "26px", fontWeight: "700", margin: 0, fontFamily: "'Segoe UI', sans-serif" },
  subtext: { color: "#64748b", fontSize: "14px" },
  label: { color: "#94a3b8", fontSize: "13px", fontWeight: "500", marginBottom: "6px" },
  input: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", color: "#f1f5f9", fontSize: "15px", padding: "10px 14px", width: "100%", outline: "none" },
  submitBtn: { background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)", border: "none", borderRadius: "10px", padding: "12px", fontSize: "15px", fontWeight: "600", color: "white" },
  errorBox: { background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "8px" },
  switchText: { color: "#64748b", fontSize: "14px" },
  linkBtn: { background: "none", border: "none", color: "#3b82f6", fontWeight: "600", cursor: "pointer", padding: 0, fontSize: "14px" },
};
