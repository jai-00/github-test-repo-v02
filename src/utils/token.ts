export function getToken(): string | null {
  const token: string | null = localStorage.getItem("accessToken");
  return token;
}

export function isTokenValid(): boolean {
  return false;
}
