import mailchimpClient from '@mailchimp/mailchimp_marketing';

export const isDev = process.env.NODE_ENV === 'development';
export const isProd = process.env.NODE_ENV === 'production';

export const isClient = typeof document !== 'undefined';
export const isServer = !isClient;

if (typeof process.env.NEXT_PUBLIC_SITE_URL !== 'string') {
  throw new Error(
    `Please set the NEXT_PUBLIC_SITE_URL environment variable to your site's URL.`
  );
}

export const siteURL = new URL(process.env.NEXT_PUBLIC_SITE_URL);
export const siteOrigin = siteURL.origin;

export const showLogger = isDev
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true';

export const RECHAPCHA_KEY = process.env.NEXT_PUBLIC_RECAPCHA_PUBLIC as string;
export const SERVICE = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE as string;
export const TEMPLATE = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE as string;
export const USER = process.env.NEXT_PUBLIC_EMAIL_JS_USER as string;

export const MAILCHIMP_API_KEY = process.env
  .NEXT_PUBLIC_MAILCHIMP_API_KEY as string;
export const MAILCHIMP_API_SERVER = process.env
  .NEXT_PUBLIC_MAILCHIMP_API_SERVER as string;
export const AUDIENCE_DESIGN_ID = process.env
  .NEXT_PUBLIC_AUDIENCE_DESIGN_ID as string;
export const AUDIENCE_DIGITAL_ID = process.env
  .NEXT_PUBLIC_AUDIENCE_DIGITAL_ID as string;
export const AUDIENCE_ENGINEERING_ID = process.env
  .NEXT_PUBLIC_AUDIENCE_ENGINEERING_ID as string;

export const URL_NETLIFY_SUBSCRIBE = process.env
  .NEXT_PUBLIC_URL_NETLIFY_SUBSCRIBE as string;

mailchimpClient.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_API_SERVER,
});
export default mailchimpClient;
