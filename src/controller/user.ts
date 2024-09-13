import { Request, Response } from "express";

export async function createUser(req:Request,res:Response) {
    const { id,                     
        email,                   
        username,                
        password,      
        firstName,         
        lastName,      
        phone }=req.body

    
}