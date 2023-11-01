import axios from 'axios';
import { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';

function BlogCardGrid() {
  const URL = 'http://192.168.0.108:8001/scode/blogList';
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setBlogs(response.data.SpecificationList);
    });
  }, []);

  return (
    <section id="blog" className="sec-padding">
      <div className="container">
        <div className="row">
          {blogs.length > 0 ? (
            blogs.map((blog, i) => (
              <div key={i} className="col-md-3 mb-3">
                <Tilt>
                  <div className="card p-3" style={{ width: '100%' }}>
                    <img
                      className="card-img-top border p-1"
                      src={`http://192.168.0.108:8001${blog.blog_image}`}
                      alt={blog.author_name}
                      style={{ height: '150px' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{blog.title}</h5>
                      <p className="card-text">{blog.content}</p>
                      <button className="btn btn-success">Read More...</button>
                    </div>
                  </div>
                </Tilt>
              </div>
            ))
          ) : (
            <h1 className="text-success text-centerm pt-5">Loading...</h1>
          )}
        </div>
      </div>
    </section>
  );
}

export default BlogCardGrid;
