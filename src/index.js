import "dotenv/config";
import express from "express";
import cors from "cors";
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
