import { COOKIE_CONSENT_KEY, GA_ID } from "@/lib/analytics";

export function GoogleAnalytics() {
  if (!GA_ID) return null;

  const initScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      wait_for_update: 500
    });
    try {
      if (localStorage.getItem('${COOKIE_CONSENT_KEY}') === 'all') {
        gtag('consent', 'update', { analytics_storage: 'granted' });
      }
    } catch (e) {}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `.trim();

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      <script dangerouslySetInnerHTML={{ __html: initScript }} />
    </>
  );
}
