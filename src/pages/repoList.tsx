import RepoCard from "pages/repocard";
import { Repo } from "types/github-user";
import './styles/main.css';

type ReposListProps = {
  repos: Repo[];
};

export default function ReposList({ repos }: ReposListProps) {
  return (
    <div className="repos-container">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}
