import React, { Component, useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown';
import { useLocation } from "react-router-dom";
import { Segment, Form, Button, Input, Card, Image, Item } from 'semantic-ui-react';

function Result() {
    const location = useLocation();
    const myparam = location.state.params;
    console.log(myparam)
    return (

        <Segment>
            <Item.Group divided>
                <Item>
                    <Item.Image size='small' src={myparam.imgselfi} />
                    <Item.Content>
                        <Item.Header>{myparam.name_kor} 교수</Item.Header>
                        <Item.Meta>
                            소속 : {myparam.affiliation} ({myparam.email})
                        </Item.Meta>
                        <Item.Meta>
                            핵심 기술 : {myparam.skill}
                        </Item.Meta>
                        <p/>
                        <Item.Description>
                            <Segment>
                                <ReactMarkdown>
                                    {myparam.desc}
                                </ReactMarkdown>
                            </Segment>
                        </Item.Description>
                        <Item.Extra>
                            {myparam.keywords}
                        </Item.Extra>
                        <Item.Extra>
                            {myparam.Sci_Class}
                        </Item.Extra>
                        <Item.Extra>
                            {myparam.Sci_Ind_Class}
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>

        </Segment>

    );
}

export default Result;