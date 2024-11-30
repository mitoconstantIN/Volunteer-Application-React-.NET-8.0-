export type UserProfileToken ={
    id: string;
    userName: string;
    email:string;
    token:string;
    firstName?: string;
    lastName?: string;
    userType: number;
    city?: string;
    points?: number;
    organizationName?: string;
    organizationEmail?: string;
    phoneNumber?: string;
    
}

export type UserProfile = {
    id: string;
    userName: string;
    email: string;
    firstName?: string;
    lastName?: string;
    usertype: number;
    city?: string;
    points?: number;
    organizationName?: string;
    organizationEmail?: string;
    phoneNumber?: string;

}