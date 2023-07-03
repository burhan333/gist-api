import React, {useContext, useEffect} from 'react'
import ContextWrapper from '../context/ContextWrapper'
import {getPublicGists, getGistForUser} from '../services/gistService'
import styled from 'styled-components'
import Octicon from 'react-octicon'

const Search = () => {

    const {setIsLoading, setData} = useContext(ContextWrapper)

    useEffect(() => {
        getPublicList()
    }, [])

    const getPublicList = async () => {
        setIsLoading(true)
        setData([])
        const data = await getPublicGists();
        if (data.data.length > 0) {
            setData(data.data)
            setIsLoading(false)
        }
        else {
            setData([])
            setIsLoading(false)
        }
    }

    const handleSearch = async (e) => {
        const value = e.target.value
        if (value) {
            setIsLoading(true)
            setData([])
            const data = await getGistForUser(value);
            if (data.data.length > 0) {
                setData(data.data)
                setIsLoading(false)
            }
            else {
                setData([])
                setIsLoading(false)
            }
        }
        else {
            getPublicList()
        }
    }

    return (
        <Wrapper>
            <InputBox>
                <Octicon name="search" />
                <Input placeholder="Search Gists for the username" onChange={handleSearch}/>
            </InputBox>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus{
    outline: 0;
  }
`;

export default Search
