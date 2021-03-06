import { NextApiRequest, NextApiResponse } from "next";
import dummyData from "../../../data/dummyData";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { itemId } = req.query
    const find = dummyData.find(el => el._id === parseInt(<string>itemId));

    if (find) {
      find.item.isFavourite = !!req.body.isFavourite
      res.status(200).json(find)
    } else {
      res.status(404).end()
    }
  } else {
    res.status(405).end()
  }
}
