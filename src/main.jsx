import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './ClientSide/Main';
import Home from './ClientSide/Pages/Home/Home';
// import MeetAbdi from './ClientSide/Pages/MeetAbdi/MeetAbdi';
import EndrosmentHome from './ClientSide/Pages/Endorsements/EndrosmentHome';
import Priorities from './ClientSide/Pages/Prioritites/Prioties';
import News from './ClientSide/Pages/News/News';
import TermsOfService from './ClientSide/Pages/TermsOfService/TermsOfService';
import PrivacyPolicy from './ClientSide/Pages/PrivacyAndPolicy/PrivacyPolicy';

//  Create a root element 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      // {
      //   path : "/meetAbdi",
      //   element : <MeetAbdi></MeetAbdi>
      // },
      {
        path : "/endorsements",
        element : <EndrosmentHome></EndrosmentHome>
      } ,
      {
        path : "/priorities" ,
        element : <Priorities></Priorities>
      } ,
      {
        path : "/news" ,
        element : <News></News>
      },
      {
        // TERMS OF SERVICE
        path: "/terms-of-service",
        element: <TermsOfService></TermsOfService>
      },
      {
        // TERMS OF SERVICE
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>
      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
