export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '629d92716924e556d6fb1e53',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-m1777wyq',
                  apiId: '2dbd4905-e24f-48cf-9d97-34a22d92a4cd'
                },
                {
                  buildHookId: '629d92713bfacf575810f2c0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-mb61byf1',
                  apiId: 'a88356ae-28a6-4730-b5c6-f11d2e24661f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yangchanglong2022/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-mb61byf1.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
