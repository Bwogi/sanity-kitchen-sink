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
                  buildHookId: '61cece82901303074a7d415d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-zsijci6e',
                  apiId: '0e54e379-1d5f-462b-a699-0e29ad92e542'
                },
                {
                  buildHookId: '61cece82eb07cbc645095b2e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xpb5c9sy',
                  apiId: '5bbaa17c-461e-46ff-9007-12784d08d675'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Bwogi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xpb5c9sy.netlify.app', category: 'apps'}
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
