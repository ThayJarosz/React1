import PropTypes from 'prop-types';
import Comment from "./Comment";

function CommentList({ comments }) {
    return (
        <div>
            <h2>Comentários</h2>
            {comments.map((comment) => (
                <Comment key={comment.id} author={comment.author} content={comment.content} />
            ))}
        </div>
    )
}

CommentList.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            author: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default CommentList;
