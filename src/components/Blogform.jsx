import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBlog } from "../features/blogs/blogSlice";
import { fetchCategories } from "../features/categories/categorySlice";
import { fetchTags } from "../features/tags/tagSlice";

export const Blogform = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.list);
    const tags = useSelector((state) => state.tags.list);
    const [form, setForm] = useState({
        title: "",
        content: "",
        categoryId: "",
        tags: [],
    });

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchTags());
    }, [dispatch]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createBlog(form));
    };

    return (
        <>
            <section className="py-5">
                <div className="container px-5">
                    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                <form onSubmit={submitHandler}>
                                    <div className="form-floating mb-3">
                                        <input className="form-control"
                                            placeholder="Title"
                                            onChange={(e) => setForm({ ...form, title: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-floating mb-3">
                                        <textarea className="form-control"
                                            placeholder="Content"
                                            onChange={(e) => setForm({ ...form, content: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-floating mb-3">
                                        <select className="form-control"
                                            onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
                                        >
                                            <option>Select Category</option>
                                            {categories.map((c) => (
                                                <option key={c.id} value={c.id}>{c.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <select
                                            className="form-control"
                                            multiple
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    tags: [...e.target.selectedOptions].map((o) => o.value),
                                                })
                                            }
                                        >
                                            {tags.map((t) => (
                                                <option key={t.id} value={t.id}>{t.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Create Blog</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
