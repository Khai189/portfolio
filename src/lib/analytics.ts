import Plausible from 'plausible-tracker'

const { trackPageview, trackEvent } = Plausible({
  domain: 'khaiportfolio.up.railway.app',
  // Respect the browser's Do Not Track setting
  trackLocalhost: false,
})

/**
 * Track a page view. Call once on initial app load.
 * Plausible is cookieless and GDPR-compliant by default.
 */
export function trackPage(): void {
  trackPageview()
}

/**
 * Track a named custom event (e.g. contact form submission, project click).
 * @param eventName - A descriptive name shown in the Plausible dashboard
 */
export function trackCustomEvent(eventName: string): void {
  trackEvent(eventName)
}
