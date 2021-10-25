import { home, whatIsHololive, hololiveAlternative, hololiveCollab } from "../../../json/data";

export default function handler(req, res) {
  res.status(200).json({ home, whatIsHololive, hololiveAlternative, hololiveCollab });
}
