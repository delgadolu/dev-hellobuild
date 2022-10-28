import { createRoot } from 'react-dom/client';
import { ApolloProvider } from "@apollo/client";
import { client } from "utils/apollo-client";
import "./index.css";
import App from "./App";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

