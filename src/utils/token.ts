export function getToken(): string|null{
    const token: string|null = localStorage.getItem("token");
    return token;
}

export function isTokenValid(): boolean{
   
    return false;
}