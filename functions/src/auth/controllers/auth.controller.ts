import {Request, Response} from "express";
import {checkUser} from "../services/auth.service";

export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const {email} = req.body;

    if (!email) {
      return res.status(400).json({message: "Email requerido"});
    }

    const token = await checkUser(email);
    return res.status(200).json({token});
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: "Login error"});
  }
};


