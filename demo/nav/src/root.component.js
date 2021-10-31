import { BrowserRouter, Link } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/deposits">Deposits</Link>
          </li>
          <li>
            <Link to="/expenses">Expenses</Link>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  );
}
