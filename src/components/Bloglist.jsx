import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../features/blogs/blogSlice";

const Bloglist = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  console.log(list);
  return (
    <div>
      {list.map((blog) => (
        <div key={blog.id} style={{ marginBottom: 20 }}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <small>Category: {blog?.category}</small>
          <br />
          <small>
            Tags: {blog.tags?.map((t) => t).join(", ")}
          </small>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
