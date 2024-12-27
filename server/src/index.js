import express from "express";
import apiRoutes from "./routes/api.js";
import docsRoutes from "./routes/api-docs.js";
import cors from "cors"


const app = express();
app.use(cors())

const port = 3000;

app.use("/api", apiRoutes);
app.use(docsRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
