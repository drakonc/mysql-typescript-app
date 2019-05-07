import { Request, Response, json } from "express";
import { connect } from "../database";
import { Post } from "../interfaces/post.interface";

export async function getPosts(req: Request, res: Response): Promise<Response> {
  const conn = await connect();
  const posts = await conn.query("SELECT * FROM posts");
  return res.json(posts[0]);
}

export async function getPost(req: Request, res: Response): Promise<Response> {
  const { postID } = req.params;
  const conn = await connect();
  const post = await conn.query("SELECT * FROM posts WHERE id = ?", [postID]);
  return res.json(post[0]);
}

export async function createPost(req: Request, res: Response) {
  const newPost: Post = req.body;
  const conn = await connect();
  await conn.query("INSERT INTO posts SET ?", [newPost]);
  console.log(newPost);
  return res.json({ message: "Post Created" });
}

export async function deletePost(req: Request, res: Response) {
  const { postID } = req.params;
  const conn = await connect();
  const post = await conn.query("DELETE FROM posts WHERE id = ?", [postID]);
  return res.json(post);
}

export async function updatePost(req: Request, res: Response) {
  const updatePost: Post = req.body;
  const { postID } = req.params;
  const conn = await connect();
  const post = await conn.query("UPDATE posts SET ? WHERE id = ?", [updatePost, postID]);
  return res.json(post);
}
