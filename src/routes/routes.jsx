import { createBrowserRouter } from "react-router-dom";
import RegisterVoter from "../pages/Voter/RegisterVoter";
import GetVoterList from "../pages/Voter/getVoterList";
import RegisterCandidate from "../pages/Candidate/RegisterCandidate";
import GetCandidateList from "../pages/Candidate/GetCandidateList";
import ElectionCommision from "../pages/ElectionCommision/ElectionCommision";
import Wallet from "../componants/Wallet/Wallet";
import Navigation from "../componants/Navigation/Navigation";

import VotingTimePeriod from "../componants/ElectionCommision/VotingTimePeriod"
import VotingStatus from "../componants/ElectionCommision/VotingStatus"
import EmergencyDeclare from "../componants/ElectionCommision/EmergencyDeclare"
import DisplyWinner from "../componants/ElectionCommision/DisplayWinner"
import AnnounceWinner from "../componants/ElectionCommision/AnnounceWinner"

export const routes = createBrowserRouter([


    {
        path: '/', element: (
            <div>


                <Wallet></Wallet>
            </div>
        )
    },
    {
        path: '/register-voter', element: (
            <div>
                <Navigation></Navigation>

                <RegisterVoter></RegisterVoter>
            </div>
        )
    },
    {
        path: '/register-candidate', element: (
            <div>
                <Navigation></Navigation>

                <RegisterCandidate></RegisterCandidate>
            </div>
        )
    },
    {
        path: '/voter-list', element: (
            <div>
                <Navigation></Navigation>

                <GetVoterList></GetVoterList>
            </div>
        )
    },
    {
        path: '/candidate-list', element: (
            <div>
                <Navigation></Navigation>

                <GetCandidateList></GetCandidateList>
            </div>
        )
    },
    {
        path: '/election-commision', element: (
            <div>
                <Navigation></Navigation>

                <ElectionCommision></ElectionCommision>
            </div>
        )
    },


    // newwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww

    {
        path: '/voting-time-period', element: (
            <div>
                <Navigation></Navigation>

                <VotingTimePeriod></VotingTimePeriod>
            </div>
        )
    },
    {
        path: '/voting-status', element: (
            <div>
                <Navigation></Navigation>

                <VotingStatus></VotingStatus>
            </div>
        )
    },
    {
        path: '/emergency-declare', element: (
            <div>
                <Navigation></Navigation>

                <EmergencyDeclare></EmergencyDeclare>
            </div>
        )
    },
    {
        path: '/disply-winner', element: (
            <div>
                <Navigation></Navigation>

                <DisplyWinner></DisplyWinner>
            </div>
        )
    },
    {
        path: '/announce-winner', element: (
            <div>
                <Navigation></Navigation>

                <AnnounceWinner></AnnounceWinner>
            </div>
        )
    },

])