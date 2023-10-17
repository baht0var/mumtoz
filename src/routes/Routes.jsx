import { ImportContacts } from "@mui/icons-material";
import { lazy } from "react";

export const Loyout = lazy(() => import("../pages/loyout/Loyout"));
export const Home = lazy(()=> import("../pages/home/Home"));
export const Event = lazy(()=>import("../pages/event/Event"));
export const EventInfo = lazy(() => import("../pages/event/EventInfo"));
export const MainForm = lazy(()=> import("../pages/form/MainForm"));
export const Courses = lazy(()=> import("../pages/course/Course"));
export const InfoPageCourse = lazy(()=> import("../pages/course/InfoPageCourse"));
export const Contact = lazy(() => import("../pages/contact/Contact")); 