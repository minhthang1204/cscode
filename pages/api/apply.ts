import type { NextApiRequest, NextApiResponse } from "next";
import dbConnection from "../../database";
import memberModel from "../../models/member.model";

dbConnection();
const member = memberModel;

export default async function(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      try {
        const body = req.body;
        const createdMember = await member.create(body);
        res.status(201).json({message: 'Application Successful', data: createdMember})
      } catch (error) {
        console.log(error);
      }
    default:
      return res.status(405).json({ message: "Method not available" });
  }
}
