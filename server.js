const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        app: "FastPesa Loan App",
        status: "Backend Running",
        version: "1.0.0"
    });
});

app.post("/register", (req, res) => {
    res.json({
        success: true,
        message: "Registration endpoint is working."
    });
});

app.post("/login", (req, res) => {
    res.json({
        success: true,
        message: "Login endpoint is working."
    });
});

app.post("/apply-loan", (req, res) => {
    res.json({
        success: true,
        message: "Loan application received."
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
