const Post = ({ post }) => {
  return (
    <div className="w-full cursor-pointer overflow-hidden rounded-lg bg-white shadow-md">
      <img src={post.image} alt="Post" className="h-48 w-full object-cover" />
      <div className="p-4">
        <div className="flex  items-center gap-2 border-b pb-2">
          <img src={post.avatar} alt="Author" className="h-10 w-10 rounded-full" />
          <p className="text-md font-semibold">
            {post.firstName} {post.lastName}
          </p>
        </div>
        <h2 className="my-2 text-xl font-semibold">{post.writeup}</h2>
      </div>
    </div>
  );
};

export default Post;
