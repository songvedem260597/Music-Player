import React from 'react';
import Login from '../pages/Login';
import Dashboard from '../pages/admin/Dashboard';
import User from '../pages/User';
import Register from '../pages/Register';
import Logout from '../pages/Logout';
import NewSongs from '../pages/NewSongs';
import Home from '../pages/Home';
import Rankings from '../pages/Rankings';
import Artist from '../pages/Artist';
import TopSongs from '../pages/TopSongs';
import Themes from '../pages/Themes';


interface RouteType {
  path: string;
  component: React.ComponentType;
  layout: boolean;
}

const PublicRoute: RouteType[] = [
  { path: '/login', component: Login ,layout:false},
  { path: '/register', component: Register ,layout:false},
  { path: '/logout', component: Logout ,layout:false},
  { path: '/new-songs', component: NewSongs ,layout:true},
  { path: '/user', component: User ,layout:true},
  { path: '/rankings', component: Rankings ,layout:true},
  { path: '/artists', component: Artist ,layout:true},
  { path: '/top-songs', component: TopSongs ,layout:true},
  { path: '/song-theme', component: Themes ,layout:true},
  { path: '/', component: Home ,layout:true},
];

const PrivateRoute: RouteType[] = [
  { path: '/user', component: User ,layout:true},
  { path: '/dashboard', component: Dashboard ,layout:true},
  { path: '/dashboard/user', component: User ,layout:true},

];

export { PublicRoute, PrivateRoute };
