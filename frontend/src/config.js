// configure our api endpoints
const uriBase = (process.env.NODE_ENV !== "production" ? (
    "http://localhost:3000"
    ) : (
        // post heroku url in ""
        ""
    )
)

const apiVer = "api/v1"

export { uriBase, apiVer }