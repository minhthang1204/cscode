import type { NextApiRequest, NextApiResponse } from "next";
import dbConnection from "../../database";
import memberModel from "../../models/member.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // await dbConnection();

  if (req.method === "GET") {
    try {
      const members = await memberModel.find(); // Lấy tất cả member
      return res.status(200).json({ message: "Fetched members successfully", data: members });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
