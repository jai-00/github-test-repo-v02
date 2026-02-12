type authTokenType = {emailId: string, token?: string, hasExpired: boolean};
type authPasswordType = {emailId: string, password: string};

export const tokenAuthData: authTokenType[] = [  ];
export const passwordAuthData: authPasswordType[] = [];

export function addAuthData(){

}

export async function authenticateUser(){
    return new Promise(resolve=> setTimeout(resolve, 1000));
}


export function demoUserAuth(): authPasswordType   {

    const randomEmailId: string = "demoUser@demoMail.com";
    const randomPassword: string = "demoUser@123"

    const demoAuthData: authPasswordType = {emailId: randomEmailId, password: randomPassword};
    passwordAuthData.push(demoAuthData);
    return demoAuthData;
}
