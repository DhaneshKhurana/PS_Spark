import React, { useState } from "react";
import { Grid, Row, Col, Placeholder, Pagination } from "rsuite";
import { PostCard } from "./PostCard";

export const PostGrid = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const currentPosts = posts.slice(start, end);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Grid fluid>
        <Row className="show-grid">
          {currentPosts.map((post) => (
            <Col key={post.id} sm={24} md={8} lg={6}>
              <PostCard post={post} />
            </Col>
          ))}
          {currentPosts.length === 0 && (
            <Col xs={24}>
              <Placeholder.Paragraph rows={5} />
            </Col>
          )}
        </Row>
      </Grid>
      <div>
        <Pagination
          prev
          next
          first
          last
          size="lg"
          pages={Math.ceil(posts.length / pageSize)}
          activePage={currentPage}
          onSelect={handlePageChange}
          style={{ marginTop: "20px", textAlign: "center" }}
          total={posts.length}
          limit={10}
        />
      </div>
    </div>
  );
};
