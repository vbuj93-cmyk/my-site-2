/**
 * Wix Custom Element Wrapper for Khadkeshwara Farms - Feed Plan WebApp
 * This allows your website to be registered and rendered inside Wix Studio / Wix CLI.
 */

class WixFeedPlanElement extends HTMLElement {
  connectedCallback() {
    // Prevent re-initialization if already connected
    if (this.shadowRoot) return;

    // Create Shadow DOM to isolate styles from Wix site styles
    const shadow = this.attachShadow({ mode: 'open' });

    // Load styles.css
    const styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.href = new URL('styles.css', import.meta.url).href;

    // Load main app wrapper container
    const container = document.createElement('div');
    container.id = 'wix-feed-plan-root';
    container.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          min-height: 100vh;
        }
      </style>
    `;

    shadow.appendChild(styleLink);
    shadow.appendChild(container);
  }
}

if (!customElements.get('wix-feed-plan')) {
  customElements.define('wix-feed-plan', WixFeedPlanElement);
}
