
declare namespace NodeJS {
  interface ProcessEnv {
    EMAIL_USER: string;
    EMAIL_PASS: string;
    EMAIL_SERVICE?: string;
    EMAIL_FROM?: string;
  }
}
