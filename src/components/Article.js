function makeEmojis(minutes) {

    let emoji = (minutes < 30) ? '☕️' : '🍱'

    let emojiSet = ''
    let num = (minutes < 30) ? Math.ceil(minutes / 5) : Math.ceil(minutes / 10)

    for(let i = 0; i < num; i++) {
        emojiSet += emoji
    }

    return emojiSet

}

function Article ({title, date = 'January 1, 1970', preview, minutes}) {
    let emojiSet = makeEmojis(minutes)
    
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            {minutes < 30 ? <p>{emojiSet} {minutes} min read</p>: <p>{emojiSet} {minutes} min read</p>}
        </article>
    )
}


export default Article