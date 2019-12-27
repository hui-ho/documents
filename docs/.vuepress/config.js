module.exports = {
    title: 'DevProj',
    description: '开发、学习文档集',

    locales: {
        '/': {
            lang: 'zh-CN',
        }
    },

    head: [
        ['link', { rel: 'icon', href: '/hero.png' }]
    ],

    themeConfig: {
        lastUpdated: '上次更新',
        nav: [
            { text: '首页', link: '/' },
            {
                text: 'PHP',
                ariaLabel: 'PHP',
                items: [
                    {
                        text: '开发环境', items: [
                            { text: 'macOS', link: '/php/devenv/macos' },
                            { text: 'Windows', link: '/php/devenv/windows' },
                        ]
                    },
                    {
                        text: '开发框架', items: [
                            { text: 'Yii', link: '/php/framework/yii' },
                            { text: 'Laravel', link: '/php/framework/laravel' },
                        ]
                    },
                ]
            },

        ],
        sidebar: 'auto',
        sidebarDepth: 2,
    }
}