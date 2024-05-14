
import AdminRoot from "../pages/admin/AdminRoot"
import Dashboard from "../pages/admin/dashboard/dashboard"
import Add from "../pages/admin/add/add"
import Error from "../pages/error/error/error"
import SiteRoot from "../pages/site/SiteRoot"
import Home from "../pages/site/home/home"
import First_no from "../pages/site/first/firstno"
import Secound_no from "../pages/site/secound/Secound_no"
import Tri_no from "../pages/site/tri/Tri_no"
import Final_no from "../pages/site/final/Final_no"
import Son_no from "../pages/site/son/son_no"
import First from "../pages/site/first/firstyes"
import Secound from "../pages/site/secound/Secound"
import Tri from "../pages/site/tri/Tri"
import Son from "../pages/site/son/son"
import Final from "../pages/site/final/Final"

const ROUTES =[
    {
        path:"/",
        element:<SiteRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            }
            ,{
                path:"no",
                element:<First_no/>
            } ,{
                path:"no/no",
                element:<Secound_no/>
            },{
                path:"no/no/no",
                element:<Tri_no/>
            },{
                path:"no/no/no/no",
                element:<Final_no/>
            },{
                path:"no/no/no/no/git",
                element:<Son_no/>
            },{
                path:"yes",
                element:<First/>
            },{
                path:"yes/yes",
                element:<Secound/>
            },{
                path:"yes/yes/yes",
                element:<Tri/>
            },{
                path:"yes/yes/yes/yes",
                element:<Son/>
            },{
                path:"yes/yes/yes/yes/final",
                element:<Final/>
            }
        ]
    },
    {
        path:"/admin",
        element: <AdminRoot/>,
        children:[
            {
                path:"",
                element:<Dashboard/>
            },
            {
                path:"add",
                element:<Add/>
            }
        ]
    }
    ,    {
        path:"*",
        element:<Error/>,
        
    },
]
export default ROUTES;