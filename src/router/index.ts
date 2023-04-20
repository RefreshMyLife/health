import Login from './../pages/Login';
import Event from './../pages/Event';
import AudioPlayer from '../pages/AudioPlayer';
import Shop from './../pages/Shop';
import PersonalArea from './../pages/PersonalArea';
import ExercisesPage from '../pages/ExercisesPage';
import ExerciseDetail from './../pages/ExerciseDetail';
import Registration from '../pages/Registration';

export interface IRoute {
    path: string;
    component: React.ReactNode | any;
    exact?: boolean;
}

export enum RouteName {
    LOGIN = '/login',
    REGISTRATION = '/registration',
    EVENTCALENDAR = '/event-calendar',
    SHOP = '/shop',
    AUDIOPLAYER = '/audio-player',
    PERSONALAREA = '/personal-ariea',
    EXERCISES = '/exercises',
    EXERCISESDETAIL = '/exercise/:id',
}

export const privateRoutes: IRoute[] = [
    { path: RouteName.EVENTCALENDAR, exact: true, component: Event },
    { path: RouteName.AUDIOPLAYER, exact: true, component: AudioPlayer },
    { path: RouteName.SHOP, exact: true, component: Shop },
    { path: RouteName.PERSONALAREA, exact: true, component: PersonalArea },
    { path: RouteName.EXERCISES, exact: true, component: ExercisesPage },
    { path: RouteName.EXERCISESDETAIL, exact: true, component: ExerciseDetail },
    { path: RouteName.LOGIN, exact: true, component: Login },
    { path: RouteName.REGISTRATION, exact: true, component: Registration },
];
export const publicRoutes: IRoute[] = [{ path: RouteName.LOGIN, exact: true, component: Login }];
