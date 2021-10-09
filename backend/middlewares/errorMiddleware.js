const notFound = (req,res,next) => {
    console.log("First uSEEEEE");
    res.status(404);
    res.json(`${req.originalUrl} not found`);
    next();

}


const errorHandler = (err,req,res,next) => {
    console.log("djdhsjdhsjdhj");
    const statusCode = res.statusCode === 200 ? 500: res.statusCode
    res.statusCode = statusCode;
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production'?null: err.stack
    });
    next();

}


export {notFound,errorHandler}