const express = require("express")
const rootRouter = require("./routes/index")
const userRouter = require("./routes/user")
const app = express();
const cors = require("cors")
app.use(cors());
app.use(express.json())

app.use("/api/vi", rootRouter);
app.listen(3000)