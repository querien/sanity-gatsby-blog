export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fe0c6c62386055548790a88',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pr4ej1qf',
                  apiId: '91ce1274-c872-4de2-9516-239c4266847d'
                },
                {
                  buildHookId: '5fe0c6c679b52737364e8e8d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7ck3na64',
                  apiId: '3972412d-3bf2-4baa-90ca-fa9debda73a1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/querien/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7ck3na64.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
