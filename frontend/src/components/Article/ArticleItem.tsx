import React from 'react'
import Card from '../UI/Card'

const ArticleItem = (props: any) => {
  return (
    <Card>
        <div>
            <p>
                {props.article.title}
            </p>
        </div>
        <div>
            posted by...
        </div>
    </Card>
  )
}

export default ArticleItem
