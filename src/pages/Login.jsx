import { Link } from "react-router-dom";

export function Login() {
  return (
    <h1>
      Aqui va un login <Link to={ "/about" }>Este es un hipervinculo</Link>
    </h1>
  );
}
