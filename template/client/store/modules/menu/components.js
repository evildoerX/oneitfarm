import lazyLoading from './lazyLoading'

export default {
  path: '/components',
  meta: {
    icon: 'fa-building-o',
    expanded: false,
    label: 'Components'
  },
  component: lazyLoading('components', true),

  children: [
    {
      name: 'Components',
      path: '',
      component: lazyLoading('components/Default')
    },
    {
      name: 'Tabs',
      path: 'tabs',
      meta: {
        description: 'Tabs component',
        repository: 'https://github.com/vue-bulma/tabs'
      },
      component: lazyLoading('components/Tabs')
    }
  ]
}
