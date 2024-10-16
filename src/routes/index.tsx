import React from 'react';
import Login from '../pages/Login';
import Dashboard from '../pages/admin/Dashboard';
import User from '../pages/User';
import Register from '../pages/Register';
import Logout from '../pages/Logout';
import MusicPlayer from '../pages/MusicPlayer';
import Home from '../pages/Home';


interface RouteType {
  path: string;
  component: React.ComponentType;
  layout: boolean;
}

const PublicRoute: RouteType[] = [
  { path: '/login', component: Login ,layout:false},
  { path: '/register', component: Register ,layout:false},
  { path: '/logout', component: Logout ,layout:false},
  { path: '/new-songs', component: MusicPlayer ,layout:true},
  { path: '/user', component: User ,layout:false},
  { path: '/', component: Home ,layout:true},
];

const PrivateRoute: RouteType[] = [
  { path: '/user', component: User ,layout:true},
  { path: '/dashboard', component: Dashboard ,layout:true},
  { path: '/dashboard/user', component: User ,layout:true},

];

export { PublicRoute, PrivateRoute };
