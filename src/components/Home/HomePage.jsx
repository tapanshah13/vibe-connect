
import PostCard from "@/components/PostCard/PostCard";

const getPosts = async () => {

    try {
        const res = await fetch(`${process.env.FETCH_URL}/api/post`, {
            method: 'GET',
            cache: "no-store",
            next: {
                tags: [`homePost`]
            }
        })
        return await res.json();

    } catch (error) {
        console.log(error)
    }
}

export default async function HomePage() {

    const postData = await getPosts();
    const data = postData?.posts

    return (
        <>
            <div className="flex flex-col items-center gap-5">
                {
                    data?.map((post) => (
                        <PostCard key={post._id} size={"large"} postData={post}/>
                    ))
                }
            </div>
        </>
    );
}
