import hardcodedFiles from "./hardcodedFiles";
import hardcodedBranches from "./hardcodedBranches";

const initialState = {
    active_tab: "files",
    branches: hardcodedBranches,
    files: hardcodedFiles,
    cwd: ".",

    repository: 'sixth-dir', // TODO: remove hardcode
    breadcrumbs: [],
    branch: 'master',
    last_commit: {
        sha: "XXX",
        author: "John Doe",
        date: "2001/9/11",
        message: "DID NOT QUERY BACKEND YET",
    },
};

export default initialState;
