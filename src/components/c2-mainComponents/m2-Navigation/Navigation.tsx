import React from 'react';
import s from './Navigation.module.css'
import {NavLink} from "react-router-dom";
import {MainRouterPATH} from "../m1-MainRouter/MainRouter";
import SuperButton from "../../c6-SuperComponents/s2-SuperButton/SuperButton";

export const Navigation = () => {
  return (
    <div className={s.navigation}>
      <NavLink to={'/'}><SuperButton>SuperDashboard</SuperButton></NavLink>
      <NavLink to={MainRouterPATH.Login}><SuperButton>Login</SuperButton></NavLink>
      <NavLink to={MainRouterPATH.Registration}><SuperButton>Registration</SuperButton></NavLink>
      <NavLink to={MainRouterPATH.RecoverPassword}><SuperButton>RecoverPassword</SuperButton></NavLink>
      <NavLink to={MainRouterPATH.SetNewPassword}><SuperButton>SetNewPassword</SuperButton></NavLink>
      <NavLink to={MainRouterPATH.Profile}><SuperButton>Profile</SuperButton></NavLink>
      <NavLink to={'shcha budet 404'}><SuperButton>Yanki go home</SuperButton></NavLink>
    </div>
  );
};
