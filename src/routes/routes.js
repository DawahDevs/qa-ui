import Entry from 'views/templates/Entry'
import App from 'views/templates/App'
import NotFound from 'views/links/NotFound'
import history from 'config/history'

export default {
  history,
  basename: process.env.PUBLIC_URL,
  component: Entry,
  routes: [
    {
      path: '/',
      component: App,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
}
