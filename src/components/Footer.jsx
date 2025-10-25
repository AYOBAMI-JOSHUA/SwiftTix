export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="site-container-inner footer-inner">
        <p>© {new Date().getFullYear()} SwiftTix — Built for Stage 2</p>
      </div>
    </footer>
  );
}
