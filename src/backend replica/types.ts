export type fetchFunctionOptionType = {
  method?: string;
  headers?: {
    "Content-Type": "application/json" | "application/string";
  };
  body?: string | null;
};

export type fetchFunctionResponseType = {
  json: () => string;
  body: {
    data: string;
  };
  ok: boolean;
  status: number;
};
