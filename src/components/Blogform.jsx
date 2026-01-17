import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBlog } from "../features/blogs/blogSlice";
import { fetchCategories } from "../features/categories/categorySlice";
import { fetchTags } from "../features/tags/tagSlice";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

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
            {loading && <div>....</div>}
            <section className="py-5">
                <div className="container px-5">
                    <div className="bg-light rounded-3 py-5 px-2 px-md-2 mb-2">
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-12 col-xl-10">
                                <Form onSubmit={submitHandler}>
                                    <FormGroup floating>
                                        <Input name="title" placeholder="Title" type="text" onChange={(e) => setForm({ ...form, title: e.target.value })} />
                                        <Label>Title</Label>
                                    </FormGroup>
                                    <FormGroup floating>
                                        <Input id="exampleEmail" name="content" placeholder="Content" type="textarea" onChange={(e) => setForm({ ...form, content: e.target.value })} />
                                        <Label for="exampleEmail">Content</Label>
                                    </FormGroup>
                                    <FormGroup floating>
                                        <Input id="exampleEmail" name="category" placeholder="Category" type="select" onChange={(e) => setForm({ ...form, categoryId: e.target.value })}>
                                            <option>Select Category</option>
                                            {categories.map((c) => (
                                                <option key={c.id} value={c.id}>{c.name}</option>
                                            ))}
                                        </Input>
                                        <Label for="exampleEmail">Category</Label>
                                    </FormGroup>
                                    <FormGroup floating>
                                        <Input id="exampleEmail" name="tags" placeholder="Tags" multiple type="select" onChange={(e) =>
                                            setForm({
                                                ...form,
                                                tags: [...e.target.selectedOptions].map((o) => o.value),
                                            })
                                        }>
                                            <option>Select Tags</option>
                                            {tags.map((c) => (
                                                <option key={c.id} value={c.id}>{c.name}</option>
                                            ))}
                                        </Input>
                                        <Label for="exampleEmail">Tags</Label>
                                    </FormGroup>
                                    <Button type="submit" className="btn btn-primary">Create Blog</Button>
                                    {/* 
                                    <div className="form-floating mb-3">
                                    <label for="cat">Category</label>
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
                                    <label for="cat">Tags</label>
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
                                    <button type="submit" className="btn btn-primary">Create Blog</button> */}
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
