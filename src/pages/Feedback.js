import styled from 'styled-components'
import Button from '../components/UI/Button'
import FeedbackCard from '../components/Feedback/FeedbackCard'
import { breakpoints } from '../utils/breakpoints'
import { Heading3, Paragraph } from '../components/UI/Text'
import FeedbackForm from '../components/Forms/FeedbackForm/FeedbackForm'
import useModal from '../hooks/useModal'
import { useState } from 'react'
import Tag from '../components/UI/Tag'

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  font-weight: bold;
  @media ${breakpoints.laptop} {
    position: static;
    border-radius: 5px;
  }
`

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;
  padding-bottom: 10px;
`

const Feedback = () => {
  const [isOpened, openModal, closeModal] = useModal()
  const [select, setSelect] = useState('1')
  const changeSelectHandler = (event) => {
    setSelect(event.target.value)
  }

  return (
    <>
      <FeedbackForm isOpened={isOpened} closeModal={closeModal} />
      <ActionsWrapper>
        <Paragraph>6 suggestions</Paragraph>
        <Button onClick={openModal}>+ Add feedback</Button>
      </ActionsWrapper>

      <TagsWrapper>
        <Tag
          id="1"
          name="name"
          value="1"
          label="All"
          select={select}
          onChange={changeSelectHandler}
          rotated
        >
          All
        </Tag>
        <Tag
          id="2"
          name="name"
          value="2"
          label="UX"
          select={select}
          onChange={changeSelectHandler}
          rotated
        >
          UX
        </Tag>
        <Tag
          id="3"
          name="name"
          value="3"
          label="UI"
          select={select}
          onChange={changeSelectHandler}
          rotated
        >
          UI
        </Tag>
        <Tag
          id="4"
          name="name"
          value="4"
          label="Enhancement"
          select={select}
          onChange={changeSelectHandler}
          rotated
        >
          Enhancement
        </Tag>
        <Tag
          id="5"
          name="name"
          value="5"
          label="Bug"
          select={select}
          onChange={changeSelectHandler}
          rotated
        >
          Bug
        </Tag>
        <Tag
          id="6"
          name="name"
          value="6"
          label="Feature"
          select={select}
          onChange={changeSelectHandler}
          rotated
        >
          Feature
        </Tag>
        <Tag
          id="7"
          name="name"
          value="7"
          label="Planned"
          select={select}
          onChange={changeSelectHandler}
          rotated
        >
          Planned
        </Tag>
        <Tag
          id="8"
          name="name"
          value="8"
          label="In-Progress"
          select={select}
          onChange={changeSelectHandler}
          rotated
        >
          In-Progress
        </Tag>
        <Tag
          id="9"
          name="name"
          value="9"
          label="Live"
          select={select}
          onChange={changeSelectHandler}
          rotated
        >
          Live
        </Tag>
      </TagsWrapper>
      <FeedbackCard
        title="First feedback"
        description="This is first feedback description"
        type="feature"
        numberOfVotes={1}
        numberOfComments={4}
      />
      <FeedbackCard
        title="Second feedback"
        description="This is Second feedback description"
        type="Enhancement"
        numberOfVotes={1}
        numberOfComments={4}
      />
      <FeedbackCard
        title="Third feedback"
        description="This is Third feedback description"
        type="Enhancement"
        numberOfVotes={1}
        numberOfComments={4}
      />
      <FeedbackCard
        title="Fourth feedback"
        description="This is Fourth feedback description"
        type="feature"
        numberOfVotes={1}
        numberOfComments={4}
      />
      <FeedbackCard
        title="Fifth feedback"
        description="This is Fifth feedback description"
        type="feature"
        numberOfVotes={1}
        numberOfComments={4}
      />
    </>
  )
}

export default Feedback
