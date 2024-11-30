import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { UserProfileToken } from "../Models/User";

const api = "https://localhost:7096/api/";

axios.defaults.headers.common['ApiKey'] = "app key";

export const loginAPI = async (username: string, password: string) =>
    {
        try{
            const data = await axios.post<UserProfileToken>(api + "account/login",
                {
                    username: username,
                    password: password,
                }
            );
            return data;
        }catch(error)
        {
            handleError(error)
        }
    };
    export const registerAPI = async (email: string, username: string, password: string,usertype:number, firstName?: string, lastName?: string, city?: string, points?: number, organizationName?: string, organizationEmail?:string, phoneNumber?: string, id? : string) =>
        {
            try{
                const data = await axios.post<UserProfileToken>(api + "account/register",
                    {
                        email: email,
                        username: username,
                        password: password,
                        firstName: firstName,
                        lastName: lastName,
                        usertype: usertype,
                        city: city,
                        points: points,
                        organizationName: organizationName,
                        organizationEmail: organizationEmail,
                        phoneNumber: phoneNumber,
                        id : id
                    }
                );
                return data;
            }catch(error)
            {
                handleError(error)
            }
        };