export type authContextType = {
    user: null | string;
    loading: boolean;
    setUser: (user: string)=>void;
};