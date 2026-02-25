export interface ActionResponse {
  success: boolean;
  message?: string;
  fieldErrors?: Record<string, string>;
  error?: string;
}
