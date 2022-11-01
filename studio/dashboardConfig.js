export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6361381b8250e9521923b022',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-rn5ecoz7',
                  apiId: 'e007fc86-0a3b-4cf5-bc40-7b7f91779d57'
                },
                {
                  buildHookId: '6361381cc10b81004e33a538',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-bvqba5re',
                  apiId: '319d490c-cb8f-4a7d-9a6e-d019f2c1c3c3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BillieLurk/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-bvqba5re.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
