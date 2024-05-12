import prisma from "../db/index";
import express from "express";
import { getAllProductsService } from "./users.service";

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await getAllProductsService();
  return res.send(users);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });

  return res.send(user);
});

export { router as usersRouter };
