import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning !!</h4>
        <div>
          Are you sure?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 2:00 AM"
          avatar={faker.image.avatar()}
          content="Able to understand props"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 11:00 AM"
          avatar={faker.image.avatar()}
          content="Props are passed from parent to child"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jamie"
          timeAgo="Yesterday at 5:00 PM"
          avatar={faker.image.avatar()}
          content="Nice learning"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
