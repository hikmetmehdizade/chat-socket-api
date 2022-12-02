import mongoose from "mongoose";
import app from "./src/app";
const PORT = process.env.PORT ?? 4000;

const URL = process.env.MONGO_DB_URL || "";

(async () => {
  try {
    await mongoose.connect(URL);

    app.listen(PORT, () => console.log(`Server start: ${PORT}`));
  } catch (err) {
    console.log(err);
  }
})();
