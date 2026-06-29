export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__newsletter">
          <div className="footer__newsletter-text">
            <p className="footer__title">Join our newsletter</p>
            <p>Sign up to stay updated with the latest insights, news, and more.</p>
          </div>
          <form
            className="footer__form"
            action="https://static.mailerlite.com/webforms/submit/g8b6f6"
            method="post"
            target="_blank"
          >
            <input type="email" name="fields[email]" placeholder="Your email address" required />
            <input type="hidden" name="ml-submit" value="1" />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
        <div className="footer__bottom">
          <div className="footer__legal">
            <span>Privacy Policy</span>
            <span>Data Subject Policy</span>
          </div>
          <div className="footer__logo">
            <img src="/assets/images/lf-logo-white.svg" alt="Leapfrog Logo" />
          </div>
        </div>
      </div>
    </footer>
  )
}
