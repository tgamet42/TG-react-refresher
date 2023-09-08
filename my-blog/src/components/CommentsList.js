/***********************************************************
 * CommentsList page for Thomas Gamet's refresher coding on React and client-server architectures.
 * Licensed under Apache 2.0.
 * 
 * Comments are always displayed at the bottom of an Article page
 * The comment is read from the MongoDB via server.js with the name of the user included
 **********************************************************/

const CommentsList = ({ comments }) => (
    <>
    <h3>User Commentary:</h3>
    {
    comments.map(comment => (

            <div className="comment" key={comment.postedBy + " : " + comment.text}>
                <h4>{comment.postedBy}</h4>
                <p>{comment.text}</p>
            </div>
        )) }
    </>
    );

export default CommentsList;