import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";
export default function Errpr() {
  return (
    <section class="page_404">
      <div class="container">
        <div class="four_zero_four_bg">
          <h1 class="text-center ">404</h1>
        </div>

        <div class="contant_box_404">
          <h3 class="h2">Looks like you're lost!</h3>
          <p>The page you are looking for is not available!</p>
          <Link to="/#">
            <button class="link_404">Go to Home</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
