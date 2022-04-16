import React, { useEffect, useState } from "react";

// Custom Components
import MintingTool from "../MintingTool";
import { Nav, Navbar, Container, Row, Card, Alert, Button } from "react-bootstrap";

// React Bootstraps imports
import PropTypes from "prop-types";


const FirstTab = (props) => {
    const [userHasNFT, setuserHasNFT] = useState(false);
   
    console.log(window.contract.account.accountId)

    /*let a = [];
    const sendMeta = async () => {
        setIsShow(true);
        let res = await walletConnection
            ?.account()
            .viewFunction(window.contract.account.accountId || '', 'nft_tokens_for_owner', {
                account_id: window.contract.account.accountId
            })
        a = res;
        return res;
    };*/

    useEffect(() => {
        const receivedNFT = async () => {
            let res = await walletConnection
                ?.account()
                .viewFunction(window.contract.account.accountId || '', 'nft_tokens_for_owner', {
                    account_id: window.contract.account.accountId
                })
            console.log(res)
            setuserHasNFT(res);
        };
        receivedNFT();
    }, []);

    return (
        <div className="firstTab">
            <div>
                {userHasNFT.length > 0 ? (
                   userHasNFT.map((option, index) => {
                        return <div key={index}>
                            <p>{option.metadata.title}</p>
                            <img src={option.metadata.media} width="250px" height="250px"></img>
                            </div>;
                    })
                ) : (
                    <div>
                        No results found
                    </div>
                )}
            </div>
        </div >



    );
};

export default FirstTab