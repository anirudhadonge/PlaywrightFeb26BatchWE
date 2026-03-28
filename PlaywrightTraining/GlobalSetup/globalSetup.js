import dotenv from "dotenv";

export default function globalSetup() {
  dotenv.config({
    path: "./.env",
    override: true,
  });
  console.log("UserName :" + process.env.URNAME);
  console.log("Password:" + process.env.PASSWORD);
  console.log("URL:" + process.env.URL);
}
