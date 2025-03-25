import "./Comments.css";
import profileImage from "@/assets/profile.png";
import { faker } from "@faker-js/faker";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdAddReaction } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

function Comments() {
  const comments = faker.helpers
    .uniqueArray(faker.word.sample, faker.number.int({ min: 0, max: 10 }))
    .map(() => <Comment key={faker.number.int()} />);

  return (
    <div className="comments">
      {!comments.length ? <CommentPlaceholder /> : undefined}

      <div className="comment-thread">{comments}</div>

      <div className="comment-bar">
        <div className="comment-count">
          <a href="#">
            {comments.length ? `Expand ${comments.length} comments` : undefined}
          </a>
        </div>
        <div className="comment-actions">
          <input
            placeholder="Join the conversation"
            type="text"
            name="text"
            className="input"
          />
          <span className="comment-actions-icons">
            <MdAddReaction />
            <FaCloudUploadAlt />
          </span>
        </div>
      </div>
    </div>
  );
}

function Comment() {
  const emojis = Math.random() < 0.5 ? faker.internet.emoji() : undefined;

  return (
    <div className="comment">
      <div className="comment-profile-image">
        <img src={profileImage} alt="" />
      </div>
      <div className="comment-message">
        <div className="comment-header">
          <span>
            <span className="comment-author">
              {faker.internet.displayName()}
            </span>
          </span>
          <span>
            <span className="comment-timestamp">
              {faker.number.int({ min: 1, max: 23 })}
              {Math.random() < 0.5 ? "h" : "d"} ago
            </span>
            <a href="#">
              <BsThreeDotsVertical />
            </a>
          </span>
        </div>
        <div className="comment-body">
          <p>{faker.lorem.lines({ min: 1, max: 6 })}</p>
          {emojis}
        </div>
        <div className="comment-footer">
          <span className="comment-reactions">
            <span className="comment-reaction">
              <span className="comment-reply">Reply</span>
            </span>
            <span className="comment-reaction icon-heart">
              <FaHeart />
              <span className="comment-reaction-count">
                {faker.number.int({ max: 100 })}
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

function CommentPlaceholder() {
  return (
    <div className="comment-placeholder">
      Start the conversation! &nbsp;
      <a href="#" className="secondary">
        Sign In
      </a>
    </div>
  );
}

export default Comments;
