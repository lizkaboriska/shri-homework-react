import initialState from "../state/initialState";
import {
  State,
  BranchState,
  LastCommit,
  FileDetailsState,
  FileState
} from "../interfaces/stateInterface";

export interface Action {
  type: string;
  content:
    | ActionContent
    | FilesInfoForSecondUpdate
    | LastCommit
    | FileDetailsState
    | BranchState[]
    | FileState[]
    | OpenDirectory
    | string;
}

interface ActionContent {
  filename: string;
  dirpath: string;
}

interface FilesInfoForSecondUpdate {
  id: number;
  message: string;
  name: string;
  sha: string;
  author: string;
  date: string | Date;
  updated: string | Date;
}

interface OpenDirectory {
  dirpath: string;
}

function reducer(state: State = initialState, action: Action) {
  let new_state: State;
  let content;
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
      new_state = { ...state };
      content = action.content as FileDetailsState;
      new_state.file_details = content;
      new_state.active_tab = "details";
      new_state.breadcrumbs = [
        ...state.breadcrumbs,
        content.filename as string
      ];
      return new_state;
    case "OPEN_DIRECTORY":
      new_state = { ...state };
      content = action.content as OpenDirectory;
      const new_cwd: string = content.dirpath;

      let crumbs = new_cwd.split("/").filter((crumb: string) => crumb !== ".");

      new_state.cwd = new_cwd;
      new_state.breadcrumbs = crumbs;
      new_state.active_tab = "files";

      return new_state;
    case "SEARCH_FILES":
      new_state = { ...state };
      let files_pattern = action.content as string;
      new_state.files = state.all_files.filter((object: FileState) =>
        object.name.includes(files_pattern)
      );
      return new_state;
    case "SEARCH_BRANCHES":
      new_state = { ...state };
      let branches_pattern = action.content as string;
      new_state.branches = state.all_branches.filter((object: BranchState) =>
        object.name.includes(branches_pattern)
      );
      return new_state;
    case "LAST_COMMIT_CHANGED":
      new_state = { ...state, last_commit: action.content as LastCommit };
      return new_state;
    case "FILES_INFO_UPDATE":
      new_state = { ...state };
      content = action.content as FileState[];
      new_state.all_files = content;
      new_state.files = content;
      return new_state;
    case "FILES_INFO_SECOND_UPDATE":
      new_state = state;
      content = action.content as FilesInfoForSecondUpdate;
      const id = content.id;
      new_state.files[id].committer = content.author;
      new_state.files[id].updated = content.date;
      new_state.files[id].commit_message = content.message;
      new_state.files[id].sha = content.sha;
      return new_state;
    case "BRANCHES_INFO_UPDATE":
      new_state = { ...state };
      content = action.content as BranchState[];
      for (let i = 0; i < content.length; i++) {
        content[i].id = i;
      }
      new_state.all_branches = content;
      new_state.branches = content;
      return new_state;
    default:
      return state;
  }
}

export default reducer;
