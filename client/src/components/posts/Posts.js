import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";

import Spinner from "../layout/Spinner";
import PostItem from "./PostItem";
import { FaUser } from "react-icons/fa";

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h1 className="large text-primary">Posts</h1>
          <p className="lead">
            <FaUser /> Welcome to the community
          </p>
          <div className="posts">
            {posts.map((post) => (
              <PostItem key={post._id} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
