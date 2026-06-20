# Project TODO

- [x] Create inquiries database table
- [x] Create API endpoint to save form submissions
- [x] Connect contact form to API endpoint
- [x] Build admin dashboard to view inquiries
- [x] Add notification to owner on new inquiry
- [x] Test full flow (submit form → save to DB → view in dashboard)
- [x] Add CSV export button in admin dashboard
- [x] Add Excel export button in admin dashboard
- [x] Add export endpoint in backend (adminProcedure)
- [x] Add Rate Limiting (5 req/min per IP) on inquiry.submit with HTTP 429
- [x] Add Cloudflare Turnstile CAPTCHA on all public forms (code ready, awaiting keys)
- [x] Add X-Frame-Options: DENY header
- [x] Add Content-Security-Policy header
- [ ] Verify all security measures work in production
- [x] Run tests to ensure no existing functionality is broken (20/20 passed)
