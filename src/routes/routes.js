import Entry from 'views/templates/Entry'
import NotFound from 'views/links/NotFound'
import history from 'config/history'

export default {
  history,
  basename: process.env.PUBLIC_URL,
  component: Entry,
  routes: [
    {
      path: '*',
      component: NotFound,
    },
  ],
}
