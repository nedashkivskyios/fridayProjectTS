import React from 'react';
import {Route, Routes } from 'react-router-dom';
import {Registration} from "../../c1-auth/a1-Registration/Registration";
import {Login} from "../../c1-auth/a2-Login/Login";
import {RecoverPassword} from "../../c1-auth/a3-RecoverPassword/RecoverPassword";
import {SetNewPassword} from "../../c1-auth/a4-SetNewPassword/SetNewPassword";
import {SuperDashboard} from "../SuperDashboard";
import {Profile} from "../m3-Profile/Profile";

export const MainRouterPATH = {
  Registration: '/registration',
  Login: '/login',
  RecoverPassword: '/recoverPassword',
  SetNewPassword: '/setNewPassword',
  Profile: '/profile',
}

export const MainRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<SuperDashboard />}/>
      <Route path={MainRouterPATH.Registration} element={<Registration/>} />
      <Route path={MainRouterPATH.Login} element={<Login/>} />
      <Route path={MainRouterPATH.RecoverPassword} element={<RecoverPassword/>} />
      <Route path={MainRouterPATH.SetNewPassword} element={<SetNewPassword/>} />
      <Route path={MainRouterPATH.Profile} element={<Profile/>} />
    </Routes>
  );
};
