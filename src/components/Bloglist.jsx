import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../features/blogs/blogSlice";
import { Table } from "reactstrap";
import { Link } from "react-router";


const Bloglist = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th>
              #
            </th>
            <th>Title</th>
            <th>Content</th>
            <th>Category</th>
            <th>Published</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
          list.map((blog,index)=>(
            <tr key={blog.id}>
              <td></td>
              <td>{blog.title}</td>
              <td>{blog.content}</td>
              <td>{blog?.category}</td>
              <td></td>
              <td><Link>Edit</Link><Link>Delete</Link></td>
            </tr>
          ))
        }
        </tbody>
      </Table>
    </>
  );
};

export default Bloglist;
