import { NextApiRequest, NextApiResponse } from "next";
import { CardData } from "../../index";
import dummyData from "../../../data/dummyData";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CardData[]>
) {
  if (req.method === 'GET') {
    res.status(200).json(dummyData)
  } else {
    res.status(405).end()
  }
}
