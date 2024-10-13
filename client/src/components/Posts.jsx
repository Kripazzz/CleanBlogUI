import React, { useState } from 'react';
import Postitem from './Postitem';

import Thumbnail1 from '../images/blog1.jpeg';
import Thumbnail2 from '../images/blog2.jpeg';
import Thumbnail3 from '../images/blog3.jpeg';
import Thumbnail4 from '../images/blog4.jpeg';

const DUMMY_POSTS = [
    {
        id: '1',
        thumbnail: Thumbnail1,
        category: 'education',
        title: 'This is the title of the very first on this blog',
        description: 'its a description of an education category blo',
        authorID: 3
    },
    {
        
        id: '2',
        thumbnail: Thumbnail2,
        category: 'Science',
        title: 'This is the title of the very second on this blog',
        description: 'its a description of a science',
        authorID: 1
    },
    {
        id: '3',
        thumbnail: Thumbnail3,
        category: 'weather',
        title: 'This is the title of the very third on this blog',
        description: 'its a description of a weather category blog .',
        authorID: 13
    },
    {
        id: '4',
        thumbnail: Thumbnail4,
        category: 'farming',
        title: 'This is the title of the very last on this blog',
        description: 'its a description of a farming category blog hwfwtygvjacvygcdwgfhvbjc njhgfdvchhbajsdadhgvpbjviudsguw.',
        authorID: 11
    }
    

];

const Posts = () => {
    const [posts] = useState(DUMMY_POSTS);

    return (
        <section className="posts">
            <div className='container posts_container'>
                {posts.map(({ id, thumbnail, category, title, description, authorID }) => (
                    <Postitem
                        key={id}
                        postID={id}
                        thumbnail={thumbnail}
                        category={category}
                        title={title}
                        description={description}
                        authorID={authorID}
                    />
                ))}
            </div>
        </section>
    );
};

export default Posts;





