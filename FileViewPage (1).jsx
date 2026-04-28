export default function FileViewPage({ file, onNavigate }) {
  if (!file) return null;
  return (
    <div className="min-vh-100 py-5" style={styles.bg}>
      <div className="container">
        <button className="btn btn-link text-decoration-none text-white mb-4" onClick={() => onNavigate("dashboard")}>
          &larr; Back to Dashboard
        </button>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div style={styles.card} className="p-4 p-md-5 text-center">
              <div style={styles.iconWrapper} className="mx-auto mb-4">
                <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
                   <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-white mb-2">{file.name}</h2>
              <p style={{ color: "#94a3b8" }}>{file.size} • Uploaded {file.date}</p>
              
              <div className="mt-5 p-4" style={{ background: "rgba(0,0,0,0.2)", borderRadius: "12px" }}>
                <h5 className="text-white mb-3">Decrypt File</h5>
                <input type="password" className="form-control mb-3 text-center mx-auto" placeholder="Enter password to decrypt" style={{ maxWidth: "300px", ...styles.input }} />
                <button className="btn btn-primary px-4" style={{ borderRadius: "8px" }}>Unlock & Download</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  bg: { background: "#060d1a" },
  card: { background: "rgba(15, 23, 42, 0.85)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px" },
  iconWrapper: { width: "80px", height: "80px", background: "rgba(59,130,246,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" },
  input: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#f1f5f9" }
};
