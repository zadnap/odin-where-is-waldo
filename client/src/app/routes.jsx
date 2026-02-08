import App from '@/app/App';
import { ErrorPage, GamePage, HomePage, LeaderboardPage } from '@/pages';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'games/:slug', element: <GamePage /> },
      { path: 'leaderboard', element: <LeaderboardPage /> },
    ],
  },
];

export default routes;
