import React from 'react';
const Profile = () => {
    return (
        <main className="main-content">
            <div className="main__image">
                <img src="https://www.nastol.com.ua/download.php?img=201905/1600x900/nastol.com.ua-339637.jpg"
                     alt=""/>

            </div>
            <div className="main__ava-description">
                ava+descriprion
            </div>
            <div className="main__myposts">
                My Posts
                <div className="main__myposts-newpost">
                    New Post
                </div>
                <div className="main__myposts-post">
                    Post1
                </div>
                <div className="main__myposts-post">
                    Post2
                </div>
                <div className="main__myposts-post">
                    Post3
                </div>
            </div>
        </main>


    );
}

export default Profile;
