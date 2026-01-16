// types/resend.d.ts
declare module 'resend' {
  export class Resend {
    constructor(apiKey?: string);
    emails: {
      send: (payload: {
        from: string;
        to: string | string[];
        reply_to?: string | string[];
        cc?: string | string[];
        bcc?: string | string[];
        subject: string;
        html?: string;
        text?: string;
      }) => Promise<{ data?: any; error?: any }>;
    };
  }
}