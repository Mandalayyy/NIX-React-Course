import { Outlet} from "react-router-dom";
import React from "react";
import { GoodsList } from "../GoodsList/GoodsList";


import '../DashboardPage/DashboardPage.css'

export const DashboardPage = () => {
    return(
        <div className='dashboard'>
              <GoodsList />
            <div className='dashboardContent'>
                <Outlet />
            </div>
            
        </div>
    )
}