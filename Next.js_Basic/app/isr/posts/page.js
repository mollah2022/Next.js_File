import { getPosts } from "@/apis/apis";
import Link from "next/link";

export default async function Posts() {
    const posts = await getPosts();

    return (
        <div>
            <h1>All posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link
                            prefetch={false}
                            className="block"
                            href={`/isr/posts/${post.id}`}
                        >
                            {post.id}. {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
