import React, { Component } from 'react'
import Building from '../../components/Building'
import buildings from '../buildings'

export default class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      results: [],
      keyword: '',
      loading: false
    }
  }

  handleKeywordChange(e) {
    const keyword = e.target.value
    this.setState({ keyword })
    this.fetchByKeyword(keyword)
  }

  fetchByKeyword(keyword) {
    this.setState({
      loading: true
    })
    buildings.fetchByKeyword(keyword)
      .then(data =>
        this.setState({
          results: data,
          loading: false
        })
      )
  }

  render() {
    let { results, keyword, loading } = this.state
    keyword = keyword.trim()
    document.title = keyword ? `${keyword} - 搜索结果` : '搜索'
    return (
      <div className="square-wrap">
        <div className="search-floor">
          <input
            type="search" placeholder="搜索"
            value={keyword}
            onChange={::this.handleKeywordChange}
          />
        </div>
        {
          keyword && results.length === 0 ?
            <p className="building-info">没有找到对应文章 :(</p> :
            <Building floors={results} loading={loading} />
        }

      </div>
    )
  }
}
