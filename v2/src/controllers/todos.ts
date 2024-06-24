import { RequestHandler } from "express";

export const createTodo: RequestHandler = (req, res, next) => {
  res.send("createTodo");
};
