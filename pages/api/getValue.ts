import { NextApiRequest, NextApiResponse } from "next";

import { existsSync } from "fs";
import { resolve } from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  req.statusCode = 200;

  const path = resolve("./restart.txt");
  const result = existsSync(path);

  res.json({
    result,
  });
  res.end();
}
