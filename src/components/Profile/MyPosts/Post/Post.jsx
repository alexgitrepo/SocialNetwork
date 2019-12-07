import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={style.post}>
                <img className={style.postAva}
                     src="https://steamuserimages-a.akamaihd.net/ugc/924800625816030205/F497B26EA6F8D66D8A2BC9FBAD413259318EAEB5/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true"
                     alt=""/>
                {props.message}
                <div>
                    <span className={style.like}>likes {props.count}</span>
                </div>
            </div>
        </div>
    );
}

export default Post;
