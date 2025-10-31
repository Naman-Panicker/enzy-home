import { NextRequest } from "next/server";



const users = [
{
    username: "namanpanicker@gmail.com",
    password: "Naman@02Enzy#"
}]

export async function POST(req: NextRequest){

    const body = await req.json();

    if(body.username == users[0].username){
        if(body.password == users[0].password){
            return Response.json({
                message: "You're logged in",
                redirectTo: "/dashboard",
                status: 200
            })
        }
        else{
            return Response.json({
                message: "Wrong password"
            })
        }
    }
    else{
        return Response.json({
            message: "Wrong username"
        })
    }
}

