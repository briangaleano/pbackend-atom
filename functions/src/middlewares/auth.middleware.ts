import {Request, Response, NextFunction} from "express";
import {auth} from "../config/firebase";

export interface AuthRequest extends Request {
  user?: any;
}

export const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({message: "Missing Authorization header"});
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({message: "Invalid token format"});
    }

    const decoded = await auth.verifyIdToken(token);

    req.user = {
      uid: decoded.uid,
      email: decoded.email,
    };

    return next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({message: "Invalid or expired token"});
  }
};
