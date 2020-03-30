/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { VoteSelection } from './../../../../../../__generated__/globalTypes';

// ====================================================
// GraphQL query operation: VotedProcedures
// ====================================================

export interface VotedProcedures_proceduresByIdHavingVoteResults_procedures_voteResults_partyVotes {
  __typename: 'PartyVote';
  party: string;
  main: VoteSelection;
}

export interface VotedProcedures_proceduresByIdHavingVoteResults_procedures_voteResults {
  __typename: 'VoteResult';
  governmentDecision: VoteSelection;
  yes: number;
  abstination: number;
  no: number;
  notVoted: number | null;
  partyVotes: VotedProcedures_proceduresByIdHavingVoteResults_procedures_voteResults_partyVotes[];
}

export interface VotedProcedures_proceduresByIdHavingVoteResults_procedures_communityVotes {
  __typename: 'CommunityVotes';
  yes: number;
  abstination: number;
  no: number;
  total: number;
}

export interface VotedProcedures_proceduresByIdHavingVoteResults_procedures {
  __typename: 'Procedure';
  _id: string;
  procedureId: string;
  title: string;
  tags: string[];
  voteDate: any | null;
  votedGovernment: boolean | null;
  submissionDate: any | null;
  completed: boolean | null;
  subjectGroups: string[];
  voted: boolean;
  type: string;
  voteResults: VotedProcedures_proceduresByIdHavingVoteResults_procedures_voteResults | null;
  communityVotes: VotedProcedures_proceduresByIdHavingVoteResults_procedures_communityVotes | null;
}

export interface VotedProcedures_proceduresByIdHavingVoteResults {
  __typename: 'ProceduresHavingVoteResults';
  total: number | null;
  procedures: VotedProcedures_proceduresByIdHavingVoteResults_procedures[];
}

export interface VotedProcedures {
  proceduresByIdHavingVoteResults: VotedProcedures_proceduresByIdHavingVoteResults;
}

export interface VotedProceduresVariables {
  procedureIds?: string[] | null;
  pageSize?: number | null;
  offset?: number | null;
}
