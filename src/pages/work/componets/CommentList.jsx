import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이인제",
        comment: "안녕하세요, 소플입니다.",
    },
    {
        name: "유재석",
        comment: "안녕하세요, 유재석입니다.",
    },
    {
        name: "강민경",
        comment: "안녕하세요, 강민경입니다.",
    },
];

export default function CommentList(props){

    return(
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
           </div>
    );
}