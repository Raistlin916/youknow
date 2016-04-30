const data = {
  zixun: {
    name: '周边资讯',
    items: [{
      id: 1,
      title: 'test',
      url: 'http://www.baidu.com'
    }, {
      id: 2,
      title: 'test2',
      url: 'http://www.baidu.com'
    }, {
      id: 3,
      title: 'test3',
      url: 'http://www.baidu.com'
    }, {
      id: 4,
      title: 'test4',
      url: 'http://www.baidu.com'
    }, {
      id: 5,
      title: 'test5',
      url: 'http://www.baidu.com'
    }, {
      id: 6,
      title: 'test6',
      url: 'http://www.baidu.com'
    }, {
      id: 7,
      title: 'test7',
      url: 'http://www.baidu.com'
    }, {
      id: 8,
      title: 'test8',
      url: 'http://www.baidu.com'
    }, {
      id: 9,
      title: 'test2',
      url: 'http://www.baidu.com'
    }, {
      id: 10,
      title: 'test2',
      url: 'http://www.baidu.com'
    }, {
      id: 11,
      title: 'test2',
      url: 'http://www.baidu.com'
    }, {
      id: 12,
      title: 'test2',
      url: 'http://www.baidu.com'
    }, {
      id: 13,
      title: 'test2',
      url: 'http://www.baidu.com'
    }, {
      id: 14,
      title: 'test2',
      url: 'http://www.baidu.com'
    }]
  },
  hr: {
    name: 'HR指引',
    items: []
  },
  enjoy: {
    name: '福利ENJOY',
    items: []
  },
  tiyan: {
    name: '初体验',
    items: []
  },
  zhanghao: {
    name: '账号指南',
    items: []
  }
}

export default {
  get: name => Promise.resolve(data[name]),
  fetchByKeyword: k => {
    const keyword = k.trim()
    if (!keyword) {
      return Promise.resolve([])
    }
    const result = []
    Object.keys(data).forEach(
      buildingName => data[buildingName].items.forEach(
        item => {
          if (item.title.indexOf(keyword) > -1) {
            result.push(item)
          }
        }
      )
    )
    return Promise.resolve(result)
  }
}
