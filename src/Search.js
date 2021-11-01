import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Segment, Form, Button, Input, Card, Image } from 'semantic-ui-react';
import axios from 'axios';

function Search() {
    const [name, setName] = useState("");
    const [isLoading, setOK] = useState(true)
    let init_data = {
        'researcher': [{
            'skill': 'force',
            'name_kor': '요다',
            'email': 'yoda@gnu.ac.kr',
            'desc': '포스밖에 모르는 바보',
            'affilation': '제다이학과',
            'Sci_Class': '포스',
            'Sci_Ind_Class': '포스, 태권도',
            'keywords': '포스',
            'imgselfi': 'https://imgflip.com/s/meme/Star-Wars-Yoda.jpg'
        }]
    }
    const [gotdata, setDATA] = useState(init_data)
    const url_researcher = 'http://203.255.24.99:3028/Researcher/';
    const get_data = async (q) => {
        const {data} = await axios.get(url_researcher + `?search=${q}`)
        console.log("Search1", data)
        if (data.length > 0) { init_data['researcher'] = data };
        setDATA(init_data)
        //history.push({ pathname: `/results/${q}`, data })
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        get_data(name)
        setOK(false)
    }

    const history = useHistory();
    const handleDetail = (each) => {
        history.push('/Result',{params:each})
    }
    return (
        <>
            {isLoading ?
                <>
                    <Segment>
                        <Form onSubmit={handleSubmit}>
                            <Form.Field>
                                <label>Searching Query : {name}</label>
                                <Input placeholder='Submit values' onChange={e => setName(e.target.value)} />
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Segment>
                </>
                :
                <>
                {console.log("IN", gotdata, isLoading)}
                    <Segment>
                        <Form onSubmit={handleSubmit}>
                            <Form.Field>
                                <label>Searching Query : {name}</label>
                                <Input placeholder='Submit values' onChange={e => setName(e.target.value)} />
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Segment>
                    <Segment>
                    <Card.Group itemsPerRow={5} stackable>
                        {gotdata['researcher'].map(
                                (each,ix) => {
                                    console.log(ix,each)
                                return (
                                    
                                    <Card raised>
                                        
                                        <Card.Content>

                                            <Card.Header>{each.name_kor}</Card.Header>
                                            <Card.Meta>{each.email}</Card.Meta>
                                            <Card.Description>
                                                {each.skill}
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            {each.keywords}
                                        </Card.Content>
                                        <Button onClick={() => {handleDetail(each)}}> 더보기 </Button>
                                    </Card>
                                    
                                    )
                                }
                            )   
                        }
                    </Card.Group>
                    </Segment>
                </>
            }

        </>
        
    );
}

export default Search;