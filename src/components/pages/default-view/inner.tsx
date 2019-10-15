import React, { Component } from "react";
import Crumbs from "./breadcrumbs";
import RepoName from "./repo-name";
import LastCommitInfo from "./last-commit-info";
import Search from "./file-branch/search";
import FilesTable from "./file-branch/files/files-table";
import BranchesTable from "./file-branch/branches/branches-table";
import Details from "./details-history/details";
import History from "./details-history/history";
import { State } from "../../../interfaces/stateInterface";

class Inner extends Component<{}, State> {
  render() {
    return (
      <>
        <Crumbs />
        <RepoName />
        <LastCommitInfo />
        <Search />
        <FilesTable />
        <BranchesTable />
        <Details />
        <History />
      </>
    );
    //<Details/>
    //<BranchesTable/>
    //<FilesTable/>

    //<FilesTable files={this.props.files} />
    //<BranchesTable branches={this.props.branches}/>
  }
}

export default Inner;
