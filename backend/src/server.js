import "dotenv/config"
import app from "./app.js"
import prisma from "./config/prisma.js"

const port = process.env.PORT || 3000

async function startServer() {
    try {
        await prisma.$connect();
        console.log("Database connected successfully")

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        });
    } catch (error) {
        console.error("Database connection failed:", error.message)
        process.exit(1)
    }
}

startServer()