
// middleware.js
export { default } from "next-auth/middleware"

export const config = {
    matcher: ["/setting", '/profile', '/friends']
}
