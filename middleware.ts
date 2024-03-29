import { authMiddleware } from "@clerk/nextjs";
 

export default authMiddleware({
  publicRoutes:[
    '/' , 
    '/events/:id' , 
    '/api/webhook/clerk' , 
    '/api/webhook/stripe' , 
    '/api/upploadthing'
  ] , 
  ignoredRoutes: [
    '/api/webhook/clerk' , 
    '/api/webhook/stripe' , 
    '/api/upploadthing'
  ]
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};