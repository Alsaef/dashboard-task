'use client'
import AnimatedHeader from '@/components/AnimationHeader';
import Card from '@/components/Card';
import ErrorBox from '@/components/ErrorBox';
import Loading from '@/components/Loading';
import useFetch from '@/hooks/useFetch';
import { Post } from '@/types/tyoe';

const PostsPage = () => {
    const { data, loading, error } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loading />
            </div>
        );
    }

    if (error) {
        return <ErrorBox message={error} />;
    }

    if (!data || data.length === 0) {
        return <ErrorBox message="No posts found" />;
    }

    return (
        <div>
            <AnimatedHeader title="Welcome to Posts Page" />

            <div className="grid grid-cols-3 gap-3 my-6">
                {data.map((post) => (
                    <Card
                        key={post.id}
                        title={post.title}
                        value={post.id}
                        description={post.body}
                        color="blue"
                    />
                ))}
            </div>
        </div>
    );
};

export default PostsPage;
