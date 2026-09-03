export function isCrawlerUserAgent(ua: string | null | undefined): boolean {
  if (!ua) return false;
  return /Googlebot|Google-InspectionTool|GoogleOther|bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|facebookexternalhit|Twitterbot|LinkedInBot|Applebot|GPTBot|ChatGPT-User|ClaudeBot|anthropic-ai|Bytespider|CCBot|PerplexityBot/i.test(
    ua,
  );
}
