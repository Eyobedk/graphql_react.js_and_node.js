const { GraphQLError } =require("graphql/error");


// an error handler constructor made for graphql users input error
class AppError extends Error {
    constructor(message, statusCode = "INTERNAL_SERVER_ERROR"){
        
        super(message);

        this.statusCode = statusCode
        Error.captureStackTrace(this)
    }
}

function HandleError(error) {
        throw new GraphQLError(error.message, {
            extensions: 
                {
                    code: error.statusCode
                }
        })
}

module.exports = {HandleError, AppError};