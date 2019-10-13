import hardcodedFiles from "./hardcodedFiles";
import hardcodedBranches from "./hardcodedBranches";
import { StateInterface } from "../interfaces/stateInterface";

const initialState: StateInterface = {
  active_tab: "files",
  branches: hardcodedBranches,
  files: hardcodedFiles,
  cwd: ".",
  all_files: [],
  all_branches: [],
  repository: "sixth-dir", // TODO: remove hardcode
  breadcrumbs: [],
  branch: "master",
  last_commit: {
    sha: "XXX",
    author: "John Doe",
    date: "2001/9/11",
    message: "DID NOT QUERY BACKEND YET"
  },
  file_details: []
};

export default initialState;
