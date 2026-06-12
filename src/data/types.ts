export type AuthType = 'none' | 'api-key' | 'oauth2' | 'bearer' | 'basic';
export type Pricing = 'free' | 'freemium' | 'paid';
export type CorsStatus = 'yes' | 'no' | 'unknown';
export type Difficulty = 'easy' | 'moderate' | 'advanced';

export interface ApiSampleRequest {
  method: string;
  url: string;
  headers?: Record<string, string>;
  body?: string;
}

export interface ApiSampleResponse {
  status: number;
  body: Record<string, unknown>;
}

export interface ApiEntry {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  auth: AuthType;
  pricing: Pricing;
  https: boolean;
  cors: CorsStatus;
  docsUrl: string;
  website?: string;
  useCases: string[];
  sampleRequest: ApiSampleRequest;
  sampleResponse: ApiSampleResponse;
  difficulty: Difficulty;
  apiTranslator: {
    whatItDoes: string;
    dataReturned: string;
    buildWith: string[];
    whenNotToUse: string;
    authExplained: string;
    scenarios: string[];
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  count: number;
}
