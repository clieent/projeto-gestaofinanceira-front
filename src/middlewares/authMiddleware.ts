import { getCookie } from "cookies-next";
import validateToken from "../util/validateCookie";
import { NextApiRequest, NextApiResponse } from "next";

const token = getCookie('AccessToken')

    async function testarToken() {
        if(token) {
            const result = await validateToken(token?.toString())
            console.log(result)
        }
    }