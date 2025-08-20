import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "./main";
import Error403Page from "../../features/errors/403/403";


const forbiddenRoute = createRoute({
    getParentRoute :()=> AuthRoute,
    path:"/forbidden",
    component:Error403Page
})

export default forbiddenRoute