import POSTS from "@/app/mock-data/mock-post"

export default function PostsList() {
    return <div className="m-20">
        {
            POSTS.map(post=> {
                return <section key={post.id}>
                    <h1>Id : {post.id} UserId: {post.userId}</h1>
                <h3>{post.title}</h3>
                <h4>{post.body}</h4>
                <hr/>
                </section>
            })
        }

    </div>
}