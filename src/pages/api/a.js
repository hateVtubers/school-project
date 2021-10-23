import { home } from "../../../json/data";

export default function handler(req, res) {
  res.status(200).json(home);
}
