import initialState from "../state/initialState";
import { State, BranchState } from "../interfaces/stateInterface";

function reducer(state: State = initialState, action: any) {
  let new_state: State;
  switch (action.type) {
    case "CHANGE_TO_FILES":
      new_state = { ...state };
      new_state.active_tab = "files";
      return new_state;
    case "CHANGE_TO_BRANCHES":
      new_state = { ...state };
      new_state.active_tab = "branches";
      return new_state;
    case "CHANGE_TO_DETAILS":
      new_state = { ...state };
      new_state.active_tab = "details";
      return new_state;
    case "CHANGE_TO_HISTORY":
      new_state = { ...state };
      new_state.active_tab = "history";
      return new_state;
    case "OPEN_FILE":
      return {
        ...state,
        file_details: action.content,
        active_tab: "details",
        breadcrumbs: [...state.breadcrumbs, action.content.filename]
      };
    case "OPEN_DIRECTORY":
      const new_cwd = action.content.dirpath;

      console.log("ADD TO CRUMBS cwd: ", new_cwd);
      let crumbs = new_cwd.split("/").filter((crumb: string) => crumb !== ".");
      console.log("crumbs_arr: ", crumbs);

      return {
        ...state,
        cwd: new_cwd,
        breadcrumbs: crumbs,
        active_tab: "files"
      };
    case "SEARCH_FILES":
      new_state = { ...state };
      let files_pattern = action.content;
      new_state.files = state.all_files.filter(
        (object: { name: { includes: (arg0: any) => void } }) =>
          object.name.includes(files_pattern)
      );
      return new_state;
    case "SEARCH_BRANCHES":
      new_state = { ...state };
      let branches_pattern = action.content;
      new_state.branches = state.all_branches.filter((object: BranchState) =>
        object.name.includes(branches_pattern)
      );
      return new_state;
    case "LAST_COMMIT_CHANGED":
      return { ...state, last_commit: action.content };
    case "FILES_INFO_UPDATE":
      return { ...state, all_files: action.content, files: action.content };
    case "FILES_INFO_SECOND_UPDATE":
      new_state = state;
      const id = action.content.id;
      new_state.files[id].committer = action.content.author;
      new_state.files[id].updated = action.content.date;
      new_state.files[id].commit_message = action.content.message;
      new_state.files[id].sha = action.content.sha;
      return new_state;
    case "BRANCHES_INFO_UPDATE":
      for (let i = 0; i < action.content.length; i++) {
        action.content[i].id = i;
      }
      return {
        ...state,
        all_branches: action.content,
        branches: action.content
      };
    default:
      return state;
  }
}

export default reducer;
