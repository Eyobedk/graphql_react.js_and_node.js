const { GraphQLError } =require("graphql/error");


// an error handler constructor made for graphql users input error
class AppError extends Error {
    status = "ERROR";    
    statusCode;

    constructor(message, statusCode = "INTERNAL_SERVER_ERROR"){
        
        super(message);

        this.statusCode = statusCode
        this.status = this.status;
        Error.captureStackTrace(this, this.constructor)
    }
}

function HandleError(error) {
    if(error instanceof Error){
        throw new GraphQLError(error.message, {
            extensions: 
                {
                    code: "INTERNAL_SERVER_ERROR"
                }
        })
    }
    
    if(error instanceof AppError){
        throw new GraphQLError(error.message, {
            extensions: {
                code: AppError.name
            }
        })
    }
}

module.exports = HandleError;