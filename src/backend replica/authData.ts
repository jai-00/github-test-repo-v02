import type { fetchFunctionOptionType } from "./types";
import { tokenExpirationTime } from "./constants/token";

// type authTokenType = string;
type authTokenType = {
  tokens: string[];
} | null;
type authPasswordType = { emailId: string; password: string };
const identifier_localStorageToken = "localStorageToken";

const storedValue = localStorage.getItem(identifier_localStorageToken);

export const tokenAuthData: authTokenType = storedValue
  ? JSON.parse(storedValue)
  : { tokens: [] };

export const passwordAuthData: authPasswordType[] = [];
// export let accessTokenAuthData: authTokenType[] = [];

const JWT_SECRET =
  "e3a9f1b2c4d5e6f7890abc1234567890fedcba0987654321a1b2c3d4e5f6a7b8";

////Add New Token Function
// function addNewToken(newToken: string) {
//   tokenAuthData?.tokens.push(newToken);
//   localStorage.setItem(
//     identifier_localStorageToken,
//     JSON.stringify(tokenAuthData),
//   );
// }

// //Remove Old Token After Expiration
// function removeToken(expiredToken: string) {
//   // tokenAuthData = JSON.parse(localStorage.getItem(identifier_localStorageToken));
//   if (!tokenAuthData) {
//     return;
//   }

//   tokenAuthData.tokens = tokenAuthData.tokens.filter(
//     (token) => token !== expiredToken,
//   );

//   localStorage.setItem(
//     identifier_localStorageToken,
//     JSON.stringify(tokenAuthData),
//   );
// }

// //Handles When A Token Expires
// function handleTokenExpiration(token: string) {
//   addNewToken(token);
// }

function isTokenAuthentic(signature: string) {
  if (signature === JWT_SECRET) {
    return true;
  }
  return false;
}

//checks if token is still valid
export function isTokenValid(token: string): boolean {
  const parts = token.split(".");

  const signatureBase64 = parts[2];
  const signature = atob(signatureBase64);
  if (!isTokenAuthentic(signature)) {
    return false;
  }

  const payloadBase64 = parts[1];
  const payload = JSON.parse(atob(payloadBase64));

  if (payload.exp <= Date.now()) {
    return false;
  }

  return true;
}

//Creates A Fake JWT Token
function createFakeJWT(email: string) {
  const header = btoa(JSON.stringify({ alg: "HS256", type: "JWT" }));
  const expirationTime = Date.now() + tokenExpirationTime * 60 * 1000;
  const payload = {
    email: email,
    exp: expirationTime,
  };
  const body = btoa(JSON.stringify(payload));
  const signature = btoa(JWT_SECRET);

  return `${header}.${body}.${signature}`;
}

export function addAuthData() {}

//The function for authentication exposed to the frontend
export async function fetchFunction(
  url: string,
  options: fetchFunctionOptionType,
): Promise<Response> {
  if (url === "https://localhost:4000/login") {
    if (!options.body || typeof options.body !== "string") {
      return new Response("Invalid body", { status: 400 });
    }

    const enteredData = JSON.parse(options.body);
    const email = enteredData.email || "";
    const password = enteredData.password || "";

    const user = passwordAuthData.find((data) => data.emailId === email);
    if (!user) {
      return new Response(
        JSON.stringify({ email: "Email not found.", password: null }),
        {
          status: 422,
        },
      );
    }
    if (user?.password !== password) {
      return new Response(
        JSON.stringify({ email: null, password: "Password incorrect" }),
        {
          status: 422,
        },
      );
    }
    //else successful login
    //create token and add timeout system for the token
    //then send the token to the user along with the username

    const token = createFakeJWT(email);
    const delay = 1000; //in milliseconds so now approx: 1 sec delay

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          new Response(JSON.stringify({ accessToken: token }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          }),
        );
      }, delay);
    });
  }

  //  if (url !== "https://localhost:4000/login") {
  return new Response("Not Found", {
    status: 404,
  });
  // }
}

//Returns the Demo User Credentials
export function demoUserAuth(): authPasswordType {
  const randomEmailId: string = "demoUser@demoMail.com";
  const randomPassword: string = "VeryStrongPassword@123";

  const demoAuthData: authPasswordType = {
    emailId: randomEmailId,
    password: randomPassword,
  };
  passwordAuthData.push(demoAuthData);
  return demoAuthData;
}
