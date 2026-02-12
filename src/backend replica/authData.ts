type authTokenType = {emailId: string, token?: string, hasExpired: boolean};
type authPasswordType = {emailId: string, password: string};

export const tokenAuthData: authTokenType[] = [  ];
export const passwordAuthData: authPasswordType[] = [];

export function addAuthData(){

}

export function authenticateUser(){

}


export function demoUserAuth(): authPasswordType   {

    const randomEmailId: string = "demoMail@demoMail.com";
    const randomPassword: string = "demo@123"

    const demoAuthData: authPasswordType = {emailId: randomEmailId, password: randomPassword};
    passwordAuthData.push(demoAuthData);
    return demoAuthData;
}
