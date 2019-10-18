export interface State {
  active_tab: string;

  branches: BranchState[];
  all_branches: BranchState[];

  files: FileState[];
  all_files: FileState[];

  cwd: string;
  repository: string;
  breadcrumbs: string[];
  branch: string;
  last_commit: LastCommit;
  file_details: FileDetailsState;
}

export interface LastCommit {
  sha: string;
  author: string;
  date: string;
  message: string;
}

export interface FileState {
  author: string;
  date: string;
  id: number;
  message: string;
  name: string;
  sha: string;
  type: string;
  committer: string;
  updated: string | Date;
  commit_message: string;
  branch: string;
}

export interface BranchState {
  id: number;
  name: string;
  sha: string;
  type?: string;
}

export interface FileDetailsState {
  filename: string;
  lines: string[];
}
