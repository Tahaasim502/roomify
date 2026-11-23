//interface defines what kind of data is being stored
interface AuthState{
    isSignedIn: boolean,
    userName: string | null,
    userId: string | null,
}


//AuthContext reuses the value and gives access or un access to the user rather than re passing it again and again for each component
type AuthContext ={
    isSignedIn: boolean,
    userName: string | null,
    userId: string | null,
    refereshAuth: () => Promise<boolean>; //success or fail
    signIn: () => Promise<boolean>;
    signOut: () => Promise<boolean>;
}