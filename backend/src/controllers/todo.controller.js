const todoCheck = (req,res) => {
    res.status(200).json({
        message: "Todo list API is running"
    });
}

export {todoCheck}