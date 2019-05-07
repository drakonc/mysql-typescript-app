import { Request, Response } from "express";
import { connect } from "../database";

export async function getPosts(req: Request, res: Response): Promise<Response> {
  const conn = await connect();
  const posts = await conn.query("SELECT * FROM posts");
  return res.json(posts[0]);
}

export async function createPost(req: Request, res: Response) {
  const newPost = req.body;
  return res.json({
    menssage: "Post Created"
  });
}
