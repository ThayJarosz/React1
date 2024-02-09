function Comment({ key, author, content }) {
    return (
        <div className="comment" key={`comment-${key}`}>
            <strong>{author}</strong>: {content}
        </div>
    )
}
export default Comment