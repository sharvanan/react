import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 2:00 AM"
        avatar={faker.image.avatar()}
        content="Able to understand props"
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 11:00 AM"
        avatar={faker.image.avatar()}
        content="Props are passed from parent to child"
      />
      <CommentDetail
        author="Jamie"
        timeAgo="Yesterday at 5:00 PM"
        avatar={faker.image.avatar()}
        content="Nice learning"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
