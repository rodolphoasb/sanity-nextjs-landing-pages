export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5fb31dbe773ac4387020c46b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2t85g5vi',
                  apiId: 'd3cb3ea7-d063-48bb-9c52-cc08ec713b1b'
                },
                {
                  buildHookId: '5fb31dbe980a413e6fa76b17',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qkeq65ej',
                  apiId: 'fb137ef3-ee17-419e-9bb5-db33e205bad1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rodolphoasb/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qkeq65ej.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
