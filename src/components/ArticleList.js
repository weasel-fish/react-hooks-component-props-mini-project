import Article from './Article'

function ArticleList ({posts}) {
    return (
        <main>
            {posts.map(post => <Article title={post.title} date={post.date} preview={post.preview} key={post.id} minutes={post.minutes}/>)}
        </main>

    )
}


export default ArticleList