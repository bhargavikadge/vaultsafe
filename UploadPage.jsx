import { useState } from "react";

export default function UploadPage({ onUploadComplete, onNavigate }) {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file && password) {
      onUploadComplete(file, password);
    }
  };

  return (
    <div className="min-vh-100 py-5" style={styles.bg}>
      <div className="container">
        <button className="btn btn-link text-decoration-none text-white mb-4" onClick={() => onNavigate("dashboard")}>
          &larr; Back to Dashboard
        </button>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div style={styles.card} className="p-4 p-md-5">
              <h3 className="text-white mb-4">Secure Upload</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label style={styles.label}>Select File</label>
                  <div style={styles.dropzone} className="text-center p-5">
                    <input type="file" className="form-control d-none" id="fileInput" onChange={e => setFile(e.target.files[0])} />
                    <label htmlFor="fileInput" style={{ cursor: "pointer", width: "100%" }}>
                      <div className="mb-2">
                        <svg width="40" height="40" fill="none" viewBox="0 0 24 24" style={{ margin: "0 auto" }}>
                          <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-primary">{file ? file.name : "Click to browse or drag file here"}</span>
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label style={styles.label}>Encryption Password</label>
                  <input type="password" style={styles.input} className="form-control" placeholder="Create a strong password" value={password} onChange={e => setPassword(e.target.value)} />
                  <small style={{ color: "#64748b" }}>This password will be required to decrypt the file.</small>
                </div>
                <button type="submit" className="btn w-100" style={styles.submitBtn} disabled={!file || !password}>
                  Encrypt & Upload
                </button>
              </form>
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
  label: { color: "#94a3b8", fontSize: "13px", fontWeight: "500", marginBottom: "8px" },
  dropzone: { background: "rgba(255,255,255,0.02)", border: "2px dashed rgba(255,255,255,0.1)", borderRadius: "12px" },
  input: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#f1f5f9" },
  submitBtn: { background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)", color: "white", fontWeight: "600" }
};
