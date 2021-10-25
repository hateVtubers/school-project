import { home, whatIsHololive, hololiveAlternative, hololiveCollab } from "../../../api/data";

export default function handler(req, res) {
  res.status(200).json({ home, whatIsHololive, hololiveAlternative, hololiveCollab });
}
